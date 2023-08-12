import { DeedAction, DeedActionTypes } from "@/types/deed";

export const toggleDeedChecked = (id: number): DeedAction => ({
  type: DeedActionTypes.TOGGLE_DEED_CHECKED,
  payload: id
})

export const setDeedText = (id: number, text: string): DeedAction => ({
  type: DeedActionTypes.SET_DEED_TEXT,
  payload: {id, text}
})