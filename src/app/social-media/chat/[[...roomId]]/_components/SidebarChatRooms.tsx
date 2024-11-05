"use client";

import { ChatRoomType } from "@/types/chat";
import { useEffect, useState } from "react";
import { ChatRoom } from "./ChatRoom";
import { getChatRooms } from "@/firebase/getChatRoom";
import { useUserStore } from "@/store/user";

export const SidebarChatRooms = () => {
  const [rooms, setRooms] = useState<ChatRoomType[]>([]);
  const { chatRooms } = useUserStore((state) => state);

  useEffect(() => {
    (async () => {
      const roomsResponse = await getChatRooms({ roomIds: chatRooms });

      setRooms(roomsResponse);
    })();
  }, []);

  return (
    <div className="w-full">
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
