import { MediaType } from './../types/media';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from ".";

export const getMedias = async (medias: string[]) => {
  const q = query(collection(db, "medias"), where("uuid", "in", medias));

  const mediasSnapshot = await getDocs(q);
  const data: MediaType[] = []
  mediasSnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data() as MediaType)
  });

  return data
};