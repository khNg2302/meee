import {
  DetailedHTMLProps,
  useEffect,
  useRef,
  VideoHTMLAttributes,
} from "react";

interface VideoI {
  uuid: string;
  src: string;
  type: string;
  activeVideoUuid: string;
  activeVideo?: (uuid: string) => void;
}

export const Video = ({ src, uuid, type, activeVideoUuid }: VideoI) => {
  const ref = useRef(null);

  useEffect(() => {
    if (activeVideoUuid === uuid) {
      console.log(ref.current);
    }
  }, [activeVideoUuid, uuid]);

  return (
    <video ref={ref} controls className="w-full h-auto">
      <source src={src} type={type}></source>
    </video>
  );
};
