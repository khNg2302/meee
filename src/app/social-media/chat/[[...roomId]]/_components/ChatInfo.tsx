import { MediaBox } from "@/components/MediaBox";
import { ChatInfoType } from "@/types/components";

export const ChatInfo = ({ photoUrl, message, displayName }: ChatInfoType) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-[3rem] flex-shrink-0">
        <MediaBox
          medias={photoUrl ? [photoUrl] : []}
          className="!aspect-square rounded-full object-cover"
          loadSrc
        />
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <label>{displayName}</label>
        {message}
      </div>
    </div>
  );
};
