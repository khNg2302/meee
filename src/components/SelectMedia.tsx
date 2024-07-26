import { FilesChange } from "@/types/components";
import { MediaType } from "@/types/media";
import { ChangeEvent, useCallback, useRef, useState } from "react";

interface SelectMedia {
  onFilesChange: FilesChange;
  dataFiles: MediaType[];
}

export const SelectMedia = ({ onFilesChange, dataFiles }: SelectMedia) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const openFileExplorer = useCallback(() => {
    fileInput.current?.click();
  }, []);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const files = e.currentTarget.files;
      const revokeDataUrls = () => {
        dataFiles.forEach((dataFile) => {
          URL.revokeObjectURL(dataFile.src);
        });
      };

      revokeDataUrls();

      const fileToData = (file: File) => {
        const data = URL.createObjectURL(file);
        return data;
      };

      const filesToMedias = (files: FileList) => {
        return Object.keys(files).map((index) => {
          const [typeName, typeSrc] = files[+index].type.split("/");
          const data = fileToData(files[+index]);
          return {
            uuid: data,
            typeName,
            typeSrc: "." + typeSrc,
            src: data,
          } as MediaType;
        });
      };

      onFilesChange(files, filesToMedias(files as FileList));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dataFiles]
  );

  return (
    <div>
      <button onClick={openFileExplorer}>Select Media</button>
      <input
        type="file"
        multiple
        className="hidden"
        ref={fileInput}
        onChange={handleOnChange}
      />
    </div>
  );
};
