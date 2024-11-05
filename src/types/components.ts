import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { MediaType } from "./media";

// Form
export type FormElementLabelPosition = "top" | "left";
export type FormElementLabelAlign = "left" | "right";

export type FormFlexDirection = "row" | "column";
//MediaBox

// Common
export type Container = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export type LinkType = {
  label: string;
  link: string;
};

//SelectMedia
export type FilesChange = (
  files: FileList | null,
  dataFiles: MediaType[]
) => void;

//ChatInfo

export type ChatInfoType = {
  displayName: string;
  photoUrl?: MediaType;
  message: string | ReactNode;
};
