import { ref, getDownloadURL } from "firebase/storage";
import { storage } from ".";

export const getImageUrl = async (imagePath: string) => {
  const imageRef = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch {
    return null;
  }
};
