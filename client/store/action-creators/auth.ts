import { AuthAction, AuthActionTypes, AuthState } from "@/types/auth";

export const setIsAuth = (payload: Omit<AuthState, 'isLoading'>): AuthAction => {
  return {type: AuthActionTypes.SET_ISAUTH, payload}
}

export const setIsLoading = (payload: boolean): AuthAction => {
  return {type: AuthActionTypes.SET_ISLOADING, payload}
}

// const setUsername = (payload: string): AuthAction => {
//   return {type: AuthActionTypes.SET_USERNAME, payload}
// }