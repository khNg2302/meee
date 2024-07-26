export type UserPermission = {
  name: string;
  slug: string;
};

export type UserRole = {
  photo: string;
  name: string;
  uuid: string;
  permissions: UserPermission[];
};
export type UserType = {
  status: "new" | "completed" | "";
  displayName?: string;
  uid: string;
  permissions: UserPermission[] | string[];
  photoUrl: string;
  activeStatus: UserActiveStatusEnum;
  role: string;
};

export type CreateUserType = {
  displayName: string;
  uid: string;
  photoUrl: string;
};

export type UserRoleResponse = {
  permissionIds: string[];
};

export enum UserActiveStatusEnum {
  ACTIVE = "ACTIVE",
  AWAY = "AWAY",
}
