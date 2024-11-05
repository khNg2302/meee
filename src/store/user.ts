import { UserStatusType } from "./../types/user";
import { UserActiveStatusEnum, UserType } from "@/types/user";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore extends UserType {
  saveUser: (user: UserType) => void;
  changeActiveStatus: (activeStatus: UserActiveStatusEnum) => void;
}

export const useUserStore = create(
  persist<UserStore>(
    (set, get) => ({
      role: "",
      status: UserStatusType.NEW,
      displayName: "",
      uid: "",
      photoUrl: "",
      permissions: [],
      chatRooms: [],
      activeStatus: UserActiveStatusEnum.AWAY,
      saveUser: (user: UserType) =>
        set({
          displayName: user.displayName,
          permissions: user.permissions,
          photoUrl: user.photoUrl,
          uid: user.uid,
          status: user.status,
          role: user.role,
          chatRooms: user.chatRooms,
        }),
      changeActiveStatus: (status: UserActiveStatusEnum) =>
        set({
          ...get(),
          activeStatus: status,
        }),
    }),
    {
      name: "user-storage", // name of the item in the storage (must be unique)
    }
  )
);
