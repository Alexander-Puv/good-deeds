export default interface IDeed {
  id: string
  checked: boolean,
  text: string,
}

// reducer

export enum DeedActionTypes {
  TOGGLE_DEED_CHECKED = 'TOGGLE_DEED_CHECKED',
  SET_DEED_TEXT = 'SET_DEED_TEXT',
}

export interface ToggleDeedCheckedAction {
  type: DeedActionTypes.TOGGLE_DEED_CHECKED,
  payload: string // id of a deed
}

export interface SetDeedTextAction {
  type: DeedActionTypes.SET_DEED_TEXT,
  payload: Omit<IDeed, 'checked'>
}

export type DeedAction = ToggleDeedCheckedAction | SetDeedTextAction
