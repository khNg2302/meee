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
      status: "",
      displayName: "",
      uid: "",
      photoUrl: "",
      permissions: [],
      activeStatus: UserActiveStatusEnum.AWAY,
      saveUser: (user: UserType) =>
        set({
          displayName: user.displayName,
          permissions: user.permissions,
          photoUrl: user.photoUrl,
          uid: user.uid,
          status: user.status,
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
