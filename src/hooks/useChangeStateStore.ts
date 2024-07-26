import { StoreState } from "@/types/storeState";

type ChangeState = (
  set: (func: (state: StoreState) => StoreState) => void,
  changedState: StoreState
) => void;

export const useChangeStateStore = () => {
  const changeState: ChangeState = (set, changedState) => {
    set((state) => ({
      ...state,
      ...changedState,
    }));
  };

  return {
    changeState,
  };
};
