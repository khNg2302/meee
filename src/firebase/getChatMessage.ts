import { pagination } from "./../util/pagination";
import { ChatMessageResponseType, ChatRoomTypeResponse } from "@/types/chat";
import { readDocument } from "./readDocument";
import { promiseAllArrayValue } from "@/util/promiseAllArrayValue";
import { PaginationType } from "@/types/util";
import { getChatRoom } from "./getChatRoom";

export const getChatMessage = async (message: string) => {
  return readDocument<ChatMessageResponseType>("chat-messages", message);
};

export const getChatMessages = async (messages: string[]) => {
  return promiseAllArrayValue<string, ChatMessageResponseType | null>(
    messages,
    getChatMessage
  );
};

export const getChatMessagesByRoom = async (
  roomUuid: string,
  paginationProps: PaginationType
) => {
  const { messages } = (await getChatRoom(roomUuid)) as ChatRoomTypeResponse;

  return getChatMessages(pagination<string>(paginationProps.page, messages));
};
