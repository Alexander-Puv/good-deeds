export interface AuthState {
  token: string | null // to update user immediately
  isLoading: boolean
  authError: string | null
}

export enum AuthActionTypes {
  AUTH = 'AUTH',
  SET_ISLOADING = 'SET_ISLOADING',
  SET_ERROR = 'AUTH_ERROR'
}

interface SetAuthAction { // login and signup
  type: AuthActionTypes.AUTH
  payload: string // token
}

interface SetIsLoadingAction {
  type: AuthActionTypes.SET_ISLOADING
  payload: boolean
}

interface SetErrorAction {
  type: AuthActionTypes.SET_ERROR
  payload: string
}

export type AuthAction =
  | SetAuthAction
  | SetIsLoadingAction
  | SetErrorAction