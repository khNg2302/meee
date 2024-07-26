import { collection, doc } from "firebase/firestore";
import { db } from ".";

export const createReferenceDocument = (collectionName: string) => {
  const newRef = doc(collection(db, collectionName));
  const uuid = newRef.id;

  return {
    newRef,
    uuid,
  };
};
