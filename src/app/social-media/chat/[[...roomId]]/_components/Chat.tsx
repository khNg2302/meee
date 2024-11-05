"use client";

import { AllSpaceBox } from "@/components/AllSpaceBox";
import { PaddingBox } from "@/components/PaddingBox";
import { ChatInfo } from "./ChatInfo";
import { useEffect, useState } from "react";
import { ChatInfoType } from "@/types/components";
import { ChatMessageResponseType } from "@/types/chat";
import { ChatMessage } from "./ChatMessage";
import { useUserStore } from "@/store/user";
import { useParams } from "next/navigation";

export const Chat = () => {
  const {roomId} = useParams()
  const [chatInfo, setChatInfo] = useState<ChatInfoType>({
    displayName: "",
    message: "",
  });
  const { uid } = useUserStore((state) => state);

  const [lastReceived, setLastReceived] = useState<string>("");
  const [lastSent, setLastSent] = useState<string>("");

  const getLastMessageUuid = (currentMessageUuid: string, userId: string) => {
    if (userId === uid) {
      setLastSent(currentMessageUuid);
      console.log("last sent true");
      return;
    }
    setLastReceived(currentMessageUuid);
  };

  const [messages, setMessages] = useState<ChatMessageResponseType[]>([]);

  useEffect(() => {
    setMessages([
      {
        uuid: "123",
        userId: "456",
        content: "content",
      },
      {
        uuid: "1234",
        userId: "r4ZEsYaPN9duARx5qmSuBa0ZMQi2",
        content: "content",
      },
      {
        uuid: "1235",
        userId: "r4ZEsYaPN9duARx5qmSuBa0ZMQi2",
        content: "content",
      },
      {
        uuid: "1236",
        userId: "456",
        content: "content",
      },
      {
        uuid: "1237",
        userId: "456",
        content: "content",
      },
      {
        uuid: "1238",
        userId: "456",
        content: "content",
      },
    ]);
  }, [roomId]);

  return (
    <AllSpaceBox className="h-full basis-[100%] md:basis-[75%] lg:basis-[80%]">
      <PaddingBox className="h-full flex flex-col">
        <ChatInfo
          photoUrl={chatInfo.photoUrl}
          message={chatInfo.message}
          displayName={chatInfo.displayName}
        />
        <AllSpaceBox className="flex-col-reverse overflow-y-auto">
          <div>
            {messages.map((message, index) => (
              <ChatMessage
                isUser={uid === message.userId}
                key={message.uuid}
                lastMessage={
                  message.uuid === lastSent || message.uuid === lastReceived
                }
                firstOtherUserMessage={
                  index === 0 || index - 1 >= 0 &&
                  message.userId !== messages[index - 1].userId
                }
                combinedMessage={
                  (index + 1 <= messages.length - 1 &&
                    message.userId === messages[index + 1].userId) ||
                  (index !== 0 && message.userId === messages[index - 1].userId)
                }
                message={message}
                setLastMessage={getLastMessageUuid}
              />
            ))}
          </div>
          <div></div>
        </AllSpaceBox>
      </PaddingBox>
    </AllSpaceBox>
  );
};
