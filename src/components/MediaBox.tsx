import Image from "next/image";
import { Video } from "./Video";
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from "react";
import { getImageUrl } from "@/firebase/getImageUrl";
import { MediaType } from "@/types/media";

interface MediaBoxI
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  medias: MediaType[];
  activeVideoUuid?: string;
  loadSrc?: boolean;
  handleActiveVideo?: (uuid: string) => void;
}

export const MediaBox = ({
  className,
  medias,
  activeVideoUuid,
  loadSrc,
  handleActiveVideo,
}: MediaBoxI) => {
  const [list, setList] = useState<MediaType[]>([]);
  useEffect(() => {
    if (!loadSrc) {
      setList(medias);
      return;
    }
    (async () => {
      const listWithUrl = await Promise.all(
        medias.map(async (item) => {
          return {
            ...item,
            src: await getImageUrl(item.src),
          };
        })
      );

      setList(listWithUrl as MediaType[]);
    })();
  }, [medias]);
  return (
    <div className={`flex flex-wrap aspect-video w-full overflow-hidden ${className}`}>
      {list.length === 0 && (
        <div className="bg-gray-300 flex items-center justify-center w-full">
          Media
        </div>
      )}
      {list.map((item) => (
        <div
          key={item.uuid}
          className="relative flex-grow flex-1 basis-[100%] sm:basis-[50%] md:basis-[33%]  lg:basis-[25%]"
        >
          {item.typeName === "image" && (
            <Image
              src={item.src}
              alt="image"
              fill
              objectFit="cover"
              className="h-auto w-full"
            />
          )}
          {item.typeName === "video" && (
            <Video
              src={item.src}
              type={item.typeSrc as "video"}
              uuid={item.uuid}
              activeVideoUuid={activeVideoUuid as string}
              activeVideo={handleActiveVideo}
            />
          )}
        </div>
      ))}
    </div>
  );
};
