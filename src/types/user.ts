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
  status: UserStatusType;
  displayName?: string;
  uid: string;
  permissions: UserPermission[];
  photoUrl: string;
  activeStatus: UserActiveStatusEnum;
  role: string;
  chatRooms?: string[];
};

export type CreateUserType = {
  displayName: string;
  uid: string;
  photoUrl: string;
  status:UserStatusType
};

export type UserRoleResponse = {
  permissionIds: string[];
};

export enum UserActiveStatusEnum {
  ACTIVE = "ACTIVE",
  AWAY = "AWAY",
}

export enum UserStatusType {
  NEW="new",
  COMPLETED='completed',
}
