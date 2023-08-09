import { AuthAction, AuthActionTypes } from "@/types/auth";
import userData from "@/types/userData";

export const login = (email: string): AuthAction => {
  // some logic to get user with email
  const payload: userData = {email, username: email}
  localStorage.setItem('user-data', JSON.stringify(payload))
  return {type: AuthActionTypes.LOGIN, payload}
}

export const signup = (username: string, email: string): AuthAction => {
  // some logic to add new user
  const payload: userData = {email, username}
  localStorage.setItem('user-data', JSON.stringify(payload))
  return {type: AuthActionTypes.SIGNUP, payload}
}

export const setIsLoading = (payload: boolean): AuthAction => {
  return {type: AuthActionTypes.SET_ISLOADING, payload}
}