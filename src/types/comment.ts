export type CommentType = {
  isReplied: boolean;
  postId: string;
  content: string;
  commentId: string | null;
  uuid: string;
};

export type CreateCommentObject = Omit<CommentType, "uuid">;
