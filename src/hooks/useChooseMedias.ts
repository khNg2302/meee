import { MediaType } from "@/types/media";
import { useRef, useState } from "react";

export const useChooseMedias = () => {
  const [dataFiles, setDataFiles] = useState<MediaType[]>([]);
  const files = useRef<FileList | null>(null);

  return {
    dataFiles,
    files,
    setDataFiles,
  };
};
