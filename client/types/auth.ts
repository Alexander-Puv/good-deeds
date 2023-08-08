export interface AuthState {
  isAuth: boolean
  isLoading: boolean
  username: string | undefined
}

export enum AuthActionTypes {
  SET_ISAUTH = 'SET_ISAUTH',
  SET_ISLOADING = 'SET_ISLOADING',
  // SET_USERNAME = 'SET_USERNAME'
}

interface SetIsAuthAction {
  type: AuthActionTypes.SET_ISAUTH,
  payload: Omit<AuthState, 'isLoading'>
}

interface SetIsLoadingAction {
  type: AuthActionTypes.SET_ISLOADING
  payload: boolean
}

// interface SetUsernameAction {
//   type: AuthActionTypes.SET_USERNAME
//   payload: string
// }

export type AuthAction = SetIsAuthAction | SetIsLoadingAction // | SetUsernameAction