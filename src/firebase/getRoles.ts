import { getPermissions } from "./getPermission";
import { UserRoleResponse } from "@/types/user";
import { readDocuments } from "./readDocument";
import { promiseAllArrayValue } from "@/util/promiseAllArrayValue";

export const getRoles = async () => {
  const roles = await readDocuments<UserRoleResponse>("roles");

  const getPermissionsOfRole = async (role: UserRoleResponse) => {
    return { ...role, permissions: await getPermissions(role.permissionIds) };
  };

  return promiseAllArrayValue(roles, getPermissionsOfRole);
};
