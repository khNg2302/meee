import { AllSpaceBox } from "@/components/AllSpaceBox";
import { ChatSidebar } from "./_components/Sidebar";
import { Chat } from "./_components/Chat";

const SocialMediaChat = () => {
  return (
    <AllSpaceBox className="!flex-row relative">
      <ChatSidebar />
      <Chat />
    </AllSpaceBox>
  );
};

export default SocialMediaChat;
