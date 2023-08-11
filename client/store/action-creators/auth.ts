import { AuthAction, AuthActionTypes } from "@/types/auth";

export const login = (email: string): AuthAction => ({
  type: AuthActionTypes.LOGIN,
  payload: {email, username: email}
})

export const signup = (username: string, email: string): AuthAction => ({
  type: AuthActionTypes.SIGNUP,
  payload: {email, username}
})

export const setIsLoading = (payload: boolean): AuthAction => ({
  type: AuthActionTypes.SET_ISLOADING,
  payload
})