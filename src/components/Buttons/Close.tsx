import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface CloseButtonI
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: string;
}

export const CloseButton = ({ variant, ...button }: CloseButtonI) => {
  return <button {...button}>X</button>;
};
