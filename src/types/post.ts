import { MediaFilesType, MediaType } from "./media";

export type PostType = {
  uuid: string;
  content: string;
  medias: MediaType[] | string[]
};

export type CreatePostType = {
  content:string,
  medias: MediaFilesType
}