"use client";

import { useCallback, useEffect, useState } from "react";
import { ChatInfo } from "./ChatInfo";
import { useUserStore } from "@/store/user";
import { getMedia } from "@/firebase/getMedias";
import { MediaType } from "@/types/media";

export const SidebarUserInfo = () => {
  const [activeStatus, setActiveStatus] = useState();
  const [userPhoto, setUserPhoto] = useState<MediaType>();
  const user = useUserStore();

  const getUserPhoto = useCallback(async () => {
    if (!user.photoUrl) return;
    
    const userPhotoResponse = await getMedia(user.photoUrl);

    setUserPhoto(userPhotoResponse as MediaType);
  }, [user]);

  useEffect(() => {
    getUserPhoto();
  }, [getUserPhoto]);

  const ActiveStatus = () => {
    return (
      <div className="flex gap-1 items-center">
        <div className="w-[.5rem] flex-shrink-0 h-[.5rem] rounded-full bg-black"></div>
        <label>status</label>
      </div>
    );
  };

  return (
    <ChatInfo
      displayName={user.displayName || "{User name}"}
      photoUrl={userPhoto}
      message={<ActiveStatus />}
    />
  );
};
