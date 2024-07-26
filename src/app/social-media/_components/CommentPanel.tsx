import { Modal } from "@/components/Modal";
import { MediaType } from "@/types/media";
import { Comment } from "./Comment";
import { Post } from "./Post";
import { usePostStore } from "@/store/post";
import { useEffect, useRef, useState } from "react";
import { CommentType } from "@/types/comment";
import { CommonModalHeader } from "@/components/ModalHeaders/Common";
import { getPostComments } from "@/firebase/getPostComments";
import { createComment } from "@/firebase/createComment";

export const CommentPanel = () => {
  const { isCommentsOpened, postId, selectedPost, closeComments } =
    usePostStore((state) => state);
  const [postComments, setPostComments] = useState<Array<CommentType>>([]);
  const [commentRepliedUuid, setCommentRepliedUuid] = useState<string>("");
  const inputCommentRef = useRef<HTMLDivElement>(null);

  const sendComment = () => {
    const content = inputCommentRef.current?.innerText;

    if (!content) return;

    createComment({
      isReplied: commentRepliedUuid ? true : false,
      postId: postId as string,
      content,
      commentId: commentRepliedUuid || null,
    });
  };

  useEffect(() => {
    (async () => {
      if (isCommentsOpened && postId) {
        setPostComments([]);
        const comments = await getPostComments(postId);
        setPostComments(comments);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <Modal
      isOpened={isCommentsOpened}
      onOverlayClickClose={() => {
        closeComments();
      }}
    >
      <Modal.Header>
        <CommonModalHeader
          title="Comments"
          onCloseModal={() => {
            closeComments();
          }}
        />
      </Modal.Header>
      <Modal.Body>
        <Post
          id={selectedPost.uuid}
          content={selectedPost.content}
          medias={selectedPost.medias as MediaType[]}
        />
        {postComments.map((comment) => (
          <Comment
            commentRepliedUuid={commentRepliedUuid}
            onCreateReply={(uuid) => {
              setCommentRepliedUuid(uuid);
            }}
            key={comment.uuid}
            comment={comment}
            isReplied={comment.uuid === commentRepliedUuid}
          />
        ))}
      </Modal.Body>
      <Modal.Footer>
        <div className="flex gap-2">
          <div
            ref={inputCommentRef}
            contentEditable={true}
            className="div-editable"
          ></div>
          <button onClick={sendComment}>&gt;</button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};
