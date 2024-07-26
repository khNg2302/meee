import {
  ChangeModalState,
  OpenOrCloseModal,
} from "@/types/hooks/useModalWithStore";
import { useChangeStateStore } from "./useChangeStateStore";

export const useModalWithStore = () => {
  const { changeState } = useChangeStateStore();
  const changeModalStateAndOther: ChangeModalState = (set, changedState) => {
    changeState(set, changedState);
  };

  return {
    changeModalStateAndOther,
  };
};
