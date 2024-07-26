import { CreatePostType } from "@/types/post";
import { uploadFiles } from "./uploadFiles";
import { createReferenceDocument } from "./createReferenceDocument";
import { setDoc } from "firebase/firestore";

export const createPost = async (postCreate: CreatePostType) => {
  const result = await uploadFiles(postCreate.medias);

  const { uuid, newRef } = createReferenceDocument("posts");

  setDoc(newRef, {
    content: postCreate.content,
    uuid,
    [result.fieldName]: result.uuids,
  });
};
