import { promiseAllArrayValue } from "@/util/promiseAllArrayValue";
import { readDocument } from "./readDocument";
import { UserPermission } from "@/types/user";

export const getPermission = async (id: string) => {
  return readDocument<UserPermission>("permissions", id);
};

export const getPermissions = async (ids: string[]) => {
  return promiseAllArrayValue<string, UserPermission | null>(
    ids,
    getPermission
  );
};
