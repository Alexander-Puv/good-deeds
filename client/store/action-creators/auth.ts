import { SERVER_URL } from "@/http";
import { AuthAction, AuthActionTypes } from "@/types/auth";
import axios, { AxiosError } from "axios";
import { Dispatch } from "react";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const {data} = await axios.post<string>(`${SERVER_URL}/auth/login`, {email, password})
      localStorage.setItem('token', data)
      dispatch({type: AuthActionTypes.AUTH, payload: data})
    } catch (e) {
      const errorData = (e as AxiosError).response?.data as {message?: string}
      dispatch({
        type: AuthActionTypes.SET_ERROR,
        payload: errorData?.message || 'Login error'
      })
    }
  }
}

export const signup = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const {data} = await axios.post<string>(`${SERVER_URL}/auth/signup`, {username, email, password})
      localStorage.setItem('token', data)
      dispatch({type: AuthActionTypes.AUTH, payload: data})
    } catch (e) {
      const errorData = (e as AxiosError).response?.data as {message?: string}
      dispatch({
        type: AuthActionTypes.SET_ERROR,
        payload: errorData?.message || 'Login error'
      })
    }
  }
}

export const setIsLoading = (payload: boolean): AuthAction => ({
  type: AuthActionTypes.SET_ISLOADING,
  payload
})