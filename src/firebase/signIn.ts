import { createUser } from "./createUser";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from ".";
import { readDocument } from "./readDocument";
import { getPermission, getPermissions } from "./getPermission";
import {
  CreateUserType,
  UserPermission,
  UserStatusType,
  UserType,
} from "@/types/user";
import { SignInFirebase } from "@/types/firebase";

export enum SignType {
  GOOGLE = "google",
}

const findUser = async (uid: string) => {
  return readDocument<UserType>("users", uid);
};

export const signIn = async (signType: SignType) => {
  let result;
  switch (signType) {
    case SignType.GOOGLE:
      result = await signInWithPopupGoogle();
      break;
    default:
      result = null;
  }

  const user = await findUser(result?.user.uid as string);

  let userResponse: UserType;

  if (!user) {
    const { user } = result as { user: User };

    const newUser = {
      photoUrl: user.photoURL || "",
      displayName: user.displayName || "",
      status: UserStatusType.NEW,
      uid: user.uid,
    } as UserType | CreateUserType;

    await createUser(newUser as CreateUserType);

    userResponse = newUser as UserType;
  }

  let permissions = [] as UserPermission[];

  if (user?.role) {
    const roleRef = doc(db, "roles", user.role);
    const roleSnap = await getDoc(roleRef);

    const { permissionIds } = roleSnap.data() as { permissionIds: string[] };
    permissions = (await getPermissions(permissionIds)) as UserPermission[];
  }

  userResponse = user as UserType;

  return {
    user: userResponse,
    permissions,
  };
};

const signInWithPopupGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
