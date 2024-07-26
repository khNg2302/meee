import { useState } from "react";

export const useMedia = () => {
  const [activeVideoUuid, setActiveVideoUuid] = useState("");

  return {
    activeVideoUuid,
    setActiveVideoUuid,
  };
};
