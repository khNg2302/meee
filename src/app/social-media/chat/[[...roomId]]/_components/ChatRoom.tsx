import { ChatInfoType } from "@/types/components";
import { ChatInfo } from "./ChatInfo";
import { CurrentMessageChatType } from "@/types/chat";
import { MediaBox } from "@/components/MediaBox";

interface ChatRoomI extends Omit<ChatInfoType, "message"> {
  hh?: any;
  currentMessage: CurrentMessageChatType;
}

export const ChatRoom = ({ hh, currentMessage, ...chatInfo }: ChatRoomI) => {
  const CurrentMessage = () => {
    return (
      <div className="flex flex-1 items-center gap-2">
        <MediaBox
          medias={[currentMessage.userPhoto]}
          loadSrc
          className="rounded-full !aspect-square !w-[1.5rem]"
        />

        <p className="flex-1 truncate">{currentMessage.content}</p>
      </div>
    );
  };
  return <ChatInfo {...chatInfo} message={<CurrentMessage />} />;
};
