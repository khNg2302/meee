import { MediaBox } from "@/components/MediaBox";
import { Modal } from "@/components/Modal";
import { CommonModalHeader } from "@/components/ModalHeaders/Common";
import { SelectMedia } from "@/components/SelectMedia";
import { useChooseMedias } from "@/hooks/useChooseMedias";
import { useMedia } from "@/hooks/useMedias";
import { useToggleComp } from "@/hooks/useToggleComp";
import { FilesChange } from "@/types/components";
import { useRef } from "react";
import { SocialMediaMediaBox } from "./Medias";
import { uploadFiles } from "@/firebase/uploadFiles";
import { useGetUploadFiles } from "@/hooks/useGetUploadFiles";
import { MediaFilesType, MediaFileType } from "@/types/media";
import { createPost } from "@/firebase/createPost";

export const CreatePost = () => {
  const { isOpen, close, open } = useToggleComp();
  const { dataFiles, files, setDataFiles } = useChooseMedias();
  const inputRef = useRef<HTMLInputElement>(null);
  const { getUploadFiles } = useGetUploadFiles<MediaFileType>();

  const handleClickHowDoFell = () => {
    open();
    inputRef.current?.focus();
  };

  const defineFiles = (newFiles: FileList | null) => {
    if (!newFiles) return [];
    return getUploadFiles(newFiles, (file: File) => {
      const [typeName, typeSrc] = file.type.split("/");
      return {
        file,
        typeName,
        name: "/" + file.name,
        typeSrc,
      } as MediaFileType;
    });
  };

  const handleFilesChange: FilesChange = (newFiles, dataFiles) => {
    files.current = newFiles;
    setDataFiles(dataFiles);
  };

  const newPost = async () => {
    const mediaFiles = {
      fieldName: "medias",
      files: defineFiles(files.current) as MediaFileType[],
    };

    createPost({ content: "", medias: mediaFiles });
  };

  return (
    <>
      <div onClick={handleClickHowDoFell}>How do you fell?</div>
      <Modal isOpened={isOpen} onOverlayClickClose={close}>
        <Modal.Header>
          <CommonModalHeader title="New Post" onCloseModal={close} />
        </Modal.Header>
        <Modal.Body>
          <div>
            <SelectMedia
              dataFiles={dataFiles}
              onFilesChange={handleFilesChange}
            />
          </div>
          <div
            ref={inputRef}
            contentEditable
            className="max-w-full outline-none"
          >
            Cap
          </div>
          <SocialMediaMediaBox medias={dataFiles} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={newPost}>Post</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
