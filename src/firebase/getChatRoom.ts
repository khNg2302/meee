import {
  ChatMessageResponseType,
  ChatRoomFilter,
  ChatRoomType,
  ChatRoomTypeResponse,
  CurrentMessageChatType,
} from "@/types/chat";
import { readDocument, readDocuments } from "./readDocument";
import { and, or, where } from "firebase/firestore";
import { getMedia } from "./getMedias";
import { promiseAllArrayValue } from "@/util/promiseAllArrayValue";
import { getChatMessage } from "./getChatMessage";
import { getUser } from "./getUser";
import { MediaType } from "@/types/media";

export const getChatRooms = async (filter: ChatRoomFilter) => {
  const queries = () => {
    if (!filter || Object.keys(filter)) return undefined;

    const listQuery = () => {
      const list = [];

      if (filter.roomIds) list.push(where("uuid", "in", filter.roomIds));

      return list;
    };

    const listFilterQuery = () => {
      const listFilter = [];

      if (filter.name)
        listFilter.push(
          where("name", ">=", filter.name),
          where("name", "<=", filter.name + "~")
        );

      if (filter.link) listFilter.push(where("link", "==", filter.link));

      return listFilter;
    };

    return and(...listQuery(), or(...listFilterQuery()));
  };

  const rooms = await readDocuments<ChatRoomTypeResponse>(
    "chat-rooms",
    queries()
  );

  const getPhoto = async (photo: string) => {
    return getMedia(photo);
  };

  const getMessageUser = async (userId: string) => {
    return getUser(userId);
  };

  const getCurrentMessage = async (currentMessageUuid: string) => {
    const message = (await getChatMessage(
      currentMessageUuid
    )) as ChatMessageResponseType;

    const userMessage = await getMessageUser(message.userId);

    const userPhoto = await getMedia(userMessage?.photoUrl as string);

    return {
      content: message.content,
      userPhoto: userPhoto,
    } as CurrentMessageChatType;
  };

  const getValuesOfRoom = async (room: ChatRoomTypeResponse) => {
    const [photo, currentMessage] = await Promise.all([
      getPhoto(room.photo),
      getCurrentMessage(room.currentMessage),
    ]);

    return {
      ...room,
      photo: photo as MediaType,
      currentMessage,
    };
  };

  return promiseAllArrayValue<ChatRoomTypeResponse, ChatRoomType>(
    rooms,
    getValuesOfRoom
  );
};

export const getChatRoom = async (uuid: string) => {
  return readDocument<ChatRoomTypeResponse>("chat-rooms",uuid)
}
