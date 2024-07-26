import { Card } from "@/components/Card";
import { MediaBox } from "@/components/MediaBox";
import { usePostStore } from "@/store/post";
import { MediaType } from "@/types/media";

import { useState } from "react";
import { SocialMediaMediaBox } from "./Medias";

interface PostI {
  medias: MediaType[];
  content: string;
  id: string;
}

export const Post = ({ medias, content, id }: PostI) => {
  const openComments = usePostStore((state) => state.openComments);

  return (
    <Card>
      <div>Avatar | date</div>
      <div>
        <p>{content}</p>
        <SocialMediaMediaBox loadSrc medias={medias} />
      </div>
      <div>
        Like
        <div>
          <button
            type="button"
            onClick={() => {
              openComments(id, {
                uuid: id,
                content,
                medias,
              });
            }}
          >
            comments
          </button>
        </div>
      </div>
    </Card>
  );
};
