import { ChatRoomFilter } from "@/types/chat";
import { readDocuments } from "./readDocument";
import { and, or, where } from "firebase/firestore";

export const getChatRooms = async (filter: ChatRoomFilter) => {
  const orQueries = () => {
    let result = undefined;
    if (!filter || Object.keys(filter)) return result;

    result = [];

    if (filter.roomIds) result.push(where("uuid", "in", filter.roomIds));

    if (filter.name)
      result.push(
        where("name", ">=", filter.name),
        where("name", "<=", filter.name + "~")
      );

    if (filter.link) result.push(where("link", "==", filter.link));

    return or(...result);
  };

  const chatRooms = readDocuments("chat-rooms", undefined, orQueries());
};
