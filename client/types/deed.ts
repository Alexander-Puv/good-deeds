import IUser from "./user"

export default interface IDeed {
  id: number,
  createdAt: Date,
  checked: boolean,
  text: string,
  userId: number,
  user: IUser
}

// reducer

export enum DeedActionTypes {
  SET_DEEDS = 'SET_DEEDS',
  ADD_DEED = 'ADD_DEED',
  TOGGLE_DEED_CHECKED = 'TOGGLE_DEED_CHECKED',
  SET_DEED_TEXT = 'SET_DEED_TEXT',
  DELETE_DEED = 'DELETE_DEED'
}

export interface SetDeeds {
  type: DeedActionTypes.SET_DEEDS,
  payload: IDeed[]
}

export interface AddDeed {
  type: DeedActionTypes.ADD_DEED,
  payload: IDeed
}

export interface ToggleDeedCheckedAction {
  type: DeedActionTypes.TOGGLE_DEED_CHECKED,
  payload: IDeed
}

export interface SetDeedTextAction {
  type: DeedActionTypes.SET_DEED_TEXT,
  payload: IDeed
}

export interface DeleteDeed {
  type: DeedActionTypes.DELETE_DEED,
  payload: number // deed id
}

export type DeedAction =
  | AddDeed
  | SetDeeds
  | ToggleDeedCheckedAction
  | SetDeedTextAction
  | DeleteDeed
