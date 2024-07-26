import { StoreState } from "../storeState";

export type ChangeModalState = (
  set: (func: (state: StoreState) => StoreState) => void,
  changedState: StoreState,
) => void;

export type OpenOrCloseModal = (
  stateName: string,
) => void;
