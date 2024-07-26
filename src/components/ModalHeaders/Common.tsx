import { CloseButton } from "../Buttons/Close";

interface CommonModalHeaderI {
  title: string;
  onCloseModal: () => void;
}

export const CommonModalHeader = ({
  title,
  onCloseModal,
}: CommonModalHeaderI) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <h2>{title}</h2>
      <CloseButton variant="coming soon" onClick={onCloseModal} />
    </div>
  );
};
