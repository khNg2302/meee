import { Container } from "@/types/components";

export const PaddingBox = ({ children, className }: Container) => {
  return <div className={`px-2 py-1 ${className}`}>{children}</div>;
};
