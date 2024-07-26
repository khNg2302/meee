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
      <div>
        <MediaBox medias={[currentMessage.userPhoto]} loadSrc />

        <p>{currentMessage.content}</p>
      </div>
    );
  };
  return <ChatInfo {...chatInfo} message={<CurrentMessage />} />;
};
