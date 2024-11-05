import { AllSpaceBox } from "@/components/AllSpaceBox";
import { SidebarUserInfo } from "./SidebarUserInfo";
import { SidebarTools } from "./SidebarTools";
import { PaddingBox } from "@/components/PaddingBox";
import { SidebarChatRooms } from "./SidebarChatRooms";

export const ChatSidebar = () => {
  return (
    <AllSpaceBox className="h-full basis-[0%] absolute inset-0 md:relative md:basis-[25%] lg:basis-[20%] translate-x-[-100%] md:translate-x-0">
      <PaddingBox>
        <SidebarUserInfo />
        <SidebarTools />
        <SidebarChatRooms />
      </PaddingBox>
    </AllSpaceBox>
  );
};
