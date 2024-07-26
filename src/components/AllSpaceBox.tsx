import { Container } from "@/types/components";

export const AllSpaceBox = ({ children, className }: Container) => {
  return <div className={`flex-1 overflow-auto flex flex-col ${className}`}>{children}</div>;
};
