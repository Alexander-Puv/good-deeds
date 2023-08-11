import { DeedAction, DeedActionTypes } from "@/types/deed";

export const toggleDeedChecked = (id: string): DeedAction => ({
  type: DeedActionTypes.TOGGLE_DEED_CHECKED,
  payload: id
})

export const setDeedText = (id: string, text: string): DeedAction => ({
  type: DeedActionTypes.SET_DEED_TEXT,
  payload: {id, text}
})