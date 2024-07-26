"use client";

import { ChatRoomType } from "@/types/chat";
import { useState } from "react";
import { ChatRoom } from "./ChatRoom";

export const SidebarChatRooms = () => {
  const [rooms, setRooms] = useState<ChatRoomType[]>([]);
  return (
    <div>
      {rooms.map((room) => {
        return (
          <ChatRoom
            key={room.uuid}
            displayName={room.name}
            photoUrl={room.photo}
            currentMessage={room.currentMessage}
          />
        );
      })}
    </div>
  );
};
