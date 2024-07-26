import { useCallback, useState } from "react";

export const useToggleComp = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = useCallback(() => {
    setOpen(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
  }, []);
  return {
    isOpen,
    open,
    close,
  };
};
