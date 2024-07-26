"use client";
import { PostType } from "@/types/post";
import { useEffect, useState } from "react";
import { Post } from "./_components/Post";
import { getPosts } from "@/firebase/getPost";
import { MediaType } from "@/types/media";
import { Modal } from "@/components/Modal";
import { usePostStore } from "@/store/post";
import { CommonModalHeader } from "@/components/ModalHeaders/Common";
import { CommentType } from "@/types/comment";
import { getPostComments } from "@/firebase/getPostComments";
import { Comment } from "./_components/Comment";
import { CommentPanel } from "./_components/CommentPanel";
import { CreatePost } from "./_components/CreatePost";
import { SocialMediaPostCollectionsNavbar } from "./_components/PostCollectionsNavbar";
import { AllSpaceBox } from "@/components/AllSpaceBox";
import { PaddingBox } from "@/components/PaddingBox";

const SocialMediaPage = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getPosts();
      setPosts(data);
    })();
  }, []);
  return (
    <AllSpaceBox className="flex w-full flex-col-reverse justify-between m-auto md:flex-row">
      <SocialMediaPostCollectionsNavbar />
      <PaddingBox>
        <CreatePost />
        {posts.map((item) => {
          return (
            <Post
              id={item.uuid}
              key={item.uuid}
              content={item.content}
              medias={item.medias as MediaType[]}
            />
          );
        })}
        <CommentPanel />
      </PaddingBox>
      <div></div>
    </AllSpaceBox>
  );
};

export default SocialMediaPage;
