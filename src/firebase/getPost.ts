import { collection, getDocs, query } from "firebase/firestore";
import { db } from ".";
import { PostType } from "@/types/post";
import { getMedias } from "./getMedias";

export const getPosts = async () => {
  const q = query(collection(db, "posts"));
  const postsSnapshot = await getDocs(q);
  const postsWithMediaUuids = [] as PostType[];

  postsSnapshot.forEach(async (doc) => {
    postsWithMediaUuids.push(doc.data() as PostType);
    // const post = doc.data() as PostType
    // const mediasWithSrcUrl = await getMedias(post.medias as any)
    // promiseData.push({...post, medias: mediasWithSrcUrl});
  });

  const postsWithMedias = postsWithMediaUuids.map(async (post) => ({
    ...post,
    medias: await getMedias(post.medias as string[]),
  }));

  const data = await Promise.all(postsWithMedias);

  return data;
};
