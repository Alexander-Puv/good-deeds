export default interface IUser {
  // id: number
  // createdAt: Date,
  email: string,
  username: string,
  tag?: string,
}

// reducer

export interface AuthState {
  user: IUser | null
  isLoading: boolean
}

export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  SET_ISLOADING = 'SET_ISLOADING'
}

interface SetLoginAction {
  type: AuthActionTypes.LOGIN
  payload: IUser | null
}

interface SetSignupAction {
  type: AuthActionTypes.SIGNUP
  payload: IUser | null
}

interface SetIsLoadingAction {
  type: AuthActionTypes.SET_ISLOADING
  payload: boolean
}

export type AuthAction = SetLoginAction | SetSignupAction | SetIsLoadingAction