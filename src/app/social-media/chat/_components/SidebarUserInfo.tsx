"use client";

import { useState } from "react";
import { ChatInfo } from "./ChatInfo";
import { useUserStore } from "@/store/user";

export const SidebarUserInfo = () => {
  const [activeStatus, setActiveStatus] = useState();
  const user = useUserStore();

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
      photoUrl={{
        uuid: "sB7bSqQ4ti4KtlQRgWRR",
        src: "images/hi.jpg",
        typeName: "image",
        typeSrc: "jpg",
      }}
      message={<ActiveStatus/>}
    />
  );
};
