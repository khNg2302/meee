import { Container } from "@/types/components";
import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ModalI extends Container {
  isOpened: boolean;
  isFull?: boolean;
  width?: string | number;
  onOverlayClickClose?: () => void;
}

export const Modal = ({
  children,
  isOpened,
  isFull,
  width,
  onOverlayClickClose,
}: ModalI) => {
  return (
    <div
      style={{
        visibility: isOpened ? "visible" : "hidden",
      }}
      className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.preventDefault();
          onOverlayClickClose && onOverlayClickClose();
        }}
        className="absolute top-0 left-0 w-full h-full z-0 bg-white/50"
        style={{ opacity: isOpened ? 1 : 0, transition: ".15s" }}
      />
      <div
        className="max-w-full max-h-full w-auto z-10 absolute bg-white shadow-lg py-2 rounded-md flex flex-col"
        style={{
          opacity: isOpened ? 1 : 0,
          transition: ".15s",
          transform: `translateY(${isOpened ? "0" : "-1rem"})`,
          width: isFull ? "100%" : width ? width : "600px",
          height: isFull ? "100%" : "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

const ModalItem = ({
  children,
  className,
}: Container &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={`px-4 py-2 ${className}`}>{children}</div>;
};

export const ModalHeader = ({ children }: Container) => {
  return <ModalItem className="border-b pt-0">{children}</ModalItem>;
};

export const ModalBody = ({ children }: Container) => {
  return <ModalItem className="flex-1">{children}</ModalItem>;
};

export const ModalFooter = ({ children }: Container) => {
  return <ModalItem className="border-t pb-0">{children}</ModalItem>;
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
