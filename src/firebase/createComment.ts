import { collection, doc, setDoc } from "firebase/firestore";
import { db } from ".";
import { CreateCommentObject } from "@/types/comment";
import { createReferenceDocument } from "./createReferenceDocument";

export const createComment = async (comment: CreateCommentObject) => {
  const { uuid, newRef } = createReferenceDocument("comments");

  return setDoc(newRef, {
    commentId: comment.commentId,
    content: comment.content,
    isReplied: comment.isReplied,
    postId: comment.postId,
    uuid,
  });
};
