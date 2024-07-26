import { MediaType } from "./media";

export type CurrentMessageChatType = {
  userPhoto: MediaType;
  content: string;
};

export type ChatRoomType = {
  uuid: string;
  link: string;
  name: string;
  currentMessage: CurrentMessageChatType;
  photo: MediaType;
};

export type ChatRoomFilter = {
  roomIds: string[]
  name?: string;
  link?: string;
};
