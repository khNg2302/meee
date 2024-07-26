import { getRelyComments } from "@/firebase/getPostComments";
import { CommentType } from "@/types/comment";
import { useEffect, useState } from "react";

interface CommentsI {
  comment: CommentType;
  isReplied: boolean;
  commentRepliedUuid: string;
  onCreateReply: (commentUuid: string) => void;
}

export const Comment = ({
  comment,
  isReplied,
  commentRepliedUuid,
  onCreateReply,
}: CommentsI) => {
  const [relies, setRelies] = useState<Array<CommentType>>([]);
  const [displayReply, setDisplayReply] = useState(false);

  useEffect(() => {
    (async () => {
      const reliesRes = await getRelyComments(comment.postId, comment.uuid);
      setRelies([...reliesRes]);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${isReplied ? "bg-zinc-300 px-4 py-2 rounded" : ""}`}>
      <div>
        <p>{comment.content}</p>
        <div>
          <button
            onClick={() => {
              setDisplayReply(!displayReply);
              onCreateReply(!displayReply ? comment.uuid : "");
            }}
          >
            Reply
          </button>
        </div>
      </div>
      {relies.map((reply) => (
        <div key={reply.uuid} className={`${!displayReply ? "hidden" : ""}`}>
          <Comment
            commentRepliedUuid={commentRepliedUuid}
            onCreateReply={() => {
              onCreateReply(reply.uuid);
            }}
            isReplied={reply.uuid === commentRepliedUuid}
            comment={reply}
          />
        </div>
      ))}
    </div>
  );
};
