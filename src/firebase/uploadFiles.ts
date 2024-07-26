import { ref, uploadBytes } from "firebase/storage";
import { storage } from ".";
import {
  MediaFilesType,
  MediaFileType,
  SaveMediaResponse,
} from "@/types/media";
import { saveMedia } from "./saveMedia";
import { promiseAllArrayValue } from "@/util/promiseAllArrayValue";

export const uploadFile = async (fileObject: MediaFileType) => {
  const getStorageLocation = () => {
    let location = "";
    switch (fileObject.typeName) {
      case "image":
        location = "images";
        break;
      case "video":
        location = "videos";
        break;
      default:
        location = "files";
        return;
    }

    return location;
  };

  const storageRef = ref(storage, getStorageLocation() + fileObject.name);

  const snapshot = await uploadBytes(storageRef, fileObject.file as File);

  const response = await saveMedia({ ...fileObject, file: snapshot });

  return response;
};

export const uploadFiles = async (filesObject: MediaFilesType) => {
  const response = await promiseAllArrayValue<MediaFileType, SaveMediaResponse>(
    filesObject.files,
    uploadFile
  );

  return { fieldName: filesObject.fieldName, uuids: response };
};
