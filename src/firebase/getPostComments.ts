import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from ".";
import { CommentType } from "@/types/comment";

export const getPostComments = async (postId: string) => {
  const q = query(
    collection(db, "comments"),
    where("isReplied", "==", false),
    where("postId", "==", postId)
  );

  const commentsSnapshot = await getDocs(q);
  const comments = [] as Array<CommentType>;

  commentsSnapshot.forEach((comment) => {
    comments.push(comment.data() as CommentType);
  });

  return comments;
};

export const getRelyComments = async (postId: string, commentId: string) => {
  const q = query(
    collection(db, "comments"),
    where("isReplied", "==", true),
    where("postId", "==", postId),
    where("commentId", "==", commentId)
  );

  const reliesSnapshot = await getDocs(q);
  const relies = [] as Array<CommentType>;

  reliesSnapshot.forEach((rely) => {
    relies.push(rely.data() as CommentType);
  });

  return relies;
};
