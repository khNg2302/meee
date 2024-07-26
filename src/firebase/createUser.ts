import { collection, doc, setDoc } from "firebase/firestore";
import { db } from ".";
import { CreateUserType, UserType } from "@/types/user";

export const createUser = async (user: CreateUserType) => {
  const userRef = doc(db, "users", user.uid);

  setDoc(userRef, {
    displayName: user.displayName,
    photoUrl: user.photoUrl,
    uid: user.uid,
  });
};
