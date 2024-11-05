import { SignType } from "@/firebase/signIn";
import { User } from "firebase/auth";
import { UserPermission, UserStatusType, UserType } from "./user";

export type SignInFirebase = (signType: SignType) => Promise<{
  status: UserStatusType;
  permissions: Array<UserPermission | null>;
  user: UserType;
}>;
