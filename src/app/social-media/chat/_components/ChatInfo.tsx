import { MediaBox } from "@/components/MediaBox";
import { ChatInfoType } from "@/types/components";

export const ChatInfo = ({ photoUrl, message, displayName }: ChatInfoType) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="basis-[12%] sm:basis-[8%] md:basis-[30%] lg:basis-[15%]">
        <MediaBox
          medias={[photoUrl]}
          className="!aspect-square rounded-full object-cover"
          loadSrc
        />
      </div>
      <div className="flex flex-col">
        <label>{displayName}</label>
        {message}
      </div>
    </div>
  );
};
