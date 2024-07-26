import { createUser } from "./createUser";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from ".";
import { readDocument } from "./readDocument";
import { getPermission, getPermissions } from "./getPermission";
import { UserType } from "@/types/user";

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

  if (!user) {
    const { user } = result as { user: User };

    await createUser({
      photoUrl: user.photoURL || "",
      displayName: user.displayName || "",
      uid: user.uid,
    });
    return {
      status: "new",
      user: result?.user,
    };
  }

  if (user) {
    if (user.role) {
      const roleRef = doc(db, "roles", user.role);
      const roleSnap = await getDoc(roleRef);

      const { permissionIds } = roleSnap.data() as { permissionIds: string[] };
      const permissions = await getPermissions(permissionIds);
      return {
        status: "completed",
        user: result?.user,
        permissions,
      };
    } else {
      return {
        status: "new",
        user: result?.user,
      };
    }
  }
};

const signInWithPopupGoogle = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};
