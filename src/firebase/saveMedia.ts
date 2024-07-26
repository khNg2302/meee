import { metadata } from "./../app/layout";
import { UploadResult } from "firebase/storage";
import { createReferenceDocument } from "./createReferenceDocument";
import { setDoc } from "firebase/firestore";
import {
  MediaFileType,
  SaveMediaResponse,
  SaveMediasResponse,
} from "@/types/media";
import { promiseAllArrayValue } from "@/util/promiseAllArrayValue";

export const saveMedia = async (mediaUpload: MediaFileType) => {
  const { uuid, newRef } = createReferenceDocument("medias");

  const {
    file,
    typeName,
    uuid: fieldName,
  } = mediaUpload as {
    file: UploadResult;
    typeName: string;
    uuid?: string;
  };

  await setDoc(newRef, {
    uuid,
    src: file.metadata.fullPath,
    typeName,
    typeSrc: file.metadata.contentType,
  });

  return (fieldName ? { uuid, fieldName } : uuid) as any;
};

export const saveMedias = async (
  fileName: string,
  mediaUploads: MediaFileType[]
) => {
  const uuids = await promiseAllArrayValue<MediaFileType, string>(
    mediaUploads,
    saveMedia
  );

  return {
    fileName,
    uuids,
  };
};
