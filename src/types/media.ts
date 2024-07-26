import { UploadResult } from "firebase/storage";

export type MediaType = {
  uuid: string;
  typeName: "video" | "image";
  typeSrc: string;
  src: string;
};

export type MediaUrls = string[];

export type MediaFileType = {
  fieldName?: string;
  typeName: "video" | "image";
  typeSrc: string;
  name: string;
  file: File | UploadResult;
};

export type MediaFilesType = {
  fieldName: string;
  files: MediaFileType[];
};

export type SaveMediaResponse =
  | {
      fieldName: string;
      uuid: string;
    }
  | string;

export type SaveMediasResponse = {
  fieldName: string;
  uuids: string[];
};
