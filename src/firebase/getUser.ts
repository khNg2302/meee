import { UserType } from "@/types/user";
import { readDocument } from "./readDocument";

export const getUser = async (uid: string) => {
    return readDocument<UserType>("users", uid);
  };