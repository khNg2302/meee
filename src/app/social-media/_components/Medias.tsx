import { MediaBox } from "@/components/MediaBox";
import { useMedia } from "@/hooks/useMedias";
import { MediaType } from "@/types/media";

export const SocialMediaMediaBox = ({
  medias,
  loadSrc,
}: {
  medias: MediaType[];
  loadSrc?: boolean;
}) => {
  const { activeVideoUuid, setActiveVideoUuid } = useMedia();
  return (
    <MediaBox
      loadSrc={loadSrc}
      medias={medias}
      activeVideoUuid={activeVideoUuid}
      handleActiveVideo={setActiveVideoUuid}
    />
  );
};
