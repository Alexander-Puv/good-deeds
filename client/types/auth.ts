export default interface userData {
  // id: number
  email: string,
  username: string,
  tag?: string,
}

// reducer

export interface AuthState {
  userData: userData | null
  isLoading: boolean
}

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  SET_ISLOADING = 'SET_ISLOADING'
}

interface SetLoginAction {
  type: AuthActionTypes.LOGIN
  payload: userData | null
}

interface SetSignupAction {
  type: AuthActionTypes.SIGNUP
  payload: userData | null
}

interface SetIsLoadingAction {
  type: AuthActionTypes.SET_ISLOADING
  payload: boolean
}

export type AuthAction = SetLoginAction | SetSignupAction | SetIsLoadingAction