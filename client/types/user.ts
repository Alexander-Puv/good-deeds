import IDeed from "./deed"

export default interface IUser {
  id: number,
  createdAt: Date,
  email: string,
  username: string,
  tag?: string | null,
  deeds?: IDeed[]
}

// reducer

export interface UserState {
  me: IUser | null,
  friend: IUser | null,
  userError: string | null
}

export enum UserActionTypes {
  SET_ME = 'SET_ME',
  EDIT_TAG = 'EDIT_TAG',
  GET_USER_BY_TAG = 'GET_USER_BY_TAG',
  REMOVE_FRIEND = 'REMOVE_FRIEND',
  SET_ERROR = 'SET_ERROR'
}

interface SetMe {
  type: UserActionTypes.SET_ME,
  payload: IUser
}

interface EditTag {
  type: UserActionTypes.EDIT_TAG,
  payload: IUser
}

interface getUserByTag {
  type: UserActionTypes.GET_USER_BY_TAG,
  payload: IUser
}

interface removeFriend {
  type: UserActionTypes.REMOVE_FRIEND
}

interface SetErrorAction {
  type: UserActionTypes.SET_ERROR
  payload: string
}

export type UserAction =
  | SetMe
  | EditTag
  | getUserByTag
  | removeFriend
  | SetErrorAction