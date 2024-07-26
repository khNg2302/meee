import { useModalWithStore } from "@/hooks/useModal";
import { PostType } from "@/types/post";
import { create } from "zustand";

interface PostStore {
  isCommentsOpened: boolean;
  postId: string | null;
  selectedPost: PostType;
  openComments: (postId: string, post: PostType) => void;
  closeComments: () => void;
}

export const usePostStore = create<PostStore>((set, get) => {
  const { changeModalStateAndOther: toggleOpenModal } = useModalWithStore();
  return {
    isCommentsOpened: false,
    postId: null,
    selectedPost: {
      uuid: "",
      medias: [],
      content: "",
    },
    openComments: (postId, post) => {
      toggleOpenModal(set, {
        isCommentsOpened: true,
        postId,
        selectedPost: post
      });
    },
    closeComments: () => {
      toggleOpenModal(set, {
        isCommentsOpened: false,
      });
    },
  };
});
