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

export type ChatRoomTypeResponse = ChatRoomType & {
  photo: string;
  currentMessage: string;
  messages: string[]
};

export type ChatRoomFilter = {
  roomIds?: string[];
  name?: string;
  link?: string;
};

export type ChatMediasMessageResponseType = {
  title: string,
  medias: string[]
}

export type ChatMessageResponseType = {
  uuid:string,
  userId: string;
  content: string | ChatMediasMessageResponseType;
};
