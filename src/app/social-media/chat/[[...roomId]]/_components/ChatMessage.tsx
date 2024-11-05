import { MediaBox } from "@/components/MediaBox";
import { ChatMessageResponseType } from "@/types/chat";
import { MediaType } from "@/types/media";
import { useEffect, useState } from "react";

interface ChatMessageI {
  isUser: boolean;
  lastMessage: boolean;
  firstOtherUserMessage: boolean;
  combinedMessage: boolean;
  message: ChatMessageResponseType;
  setLastMessage: (uuid: string, userId: string) => void;
}

export const ChatMessage = ({
  isUser,
  lastMessage,
  firstOtherUserMessage,
  combinedMessage,
  message,
  setLastMessage,
}: ChatMessageI) => {
  const [userMedia, setUserMedia] = useState<MediaType>();

  useEffect(() => {
    setLastMessage(message.uuid, message.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    (async () => {
      if (lastMessage) {
        //fetch userMedia

        setUserMedia(undefined);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastMessage]);
  return (
    <div
      className={`${
        combinedMessage ? "mt-0" : "mt-1"
      } flex items-center gap-1 ${isUser ? "flex-row-reverse" : ""}`}
    >
      <div className="w-[1.58rem] aspect-square rounded-full overflow-hidden">
        {lastMessage ? (
          <MediaBox
            className="w-full h-full"
            medias={userMedia ? [userMedia] : []}
          />
        ) : (
          <div></div>
        )}
      </div>

      <div
        className={`border py-1 rounded-lg px-2 max-w-[50%] ${
          combinedMessage
            ? lastMessage
              ? isUser
                ? "rounded-tr-none"
                : "rounded-tl-none"
              : firstOtherUserMessage
              ? `border-b-0 ${isUser ? "rounded-br-none" : "rounded-bl-none"}`
              : "rounded-l-none border-b-0"
            : ""
        }`}
      >
        content
      </div>
    </div>
  );
};
