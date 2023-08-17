import { SERVER_URL } from "@/http";
import IUser, { UserAction, UserActionTypes } from "@/types/user";
import axios, { AxiosError } from "axios";
import { Dispatch } from "react";

export const setMe = (token: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const {data} = await axios.get<IUser>(`${SERVER_URL}/user/me`, {headers: {'Authorization': `Bearer ${token}`}})
      dispatch({type: UserActionTypes.SET_ME, payload: data})
    } catch (e) {
      const errorData = (e as AxiosError).response?.data as {message?: string}
      dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: errorData?.message || 'Set me error'
      })
    }
  }
}

export const editTag = (token: string, tag: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const {data} = await axios.put<IUser>(`${SERVER_URL}/user/me`, {tag}, {headers: {'Authorization': `Bearer ${token}`}})
      dispatch({type: UserActionTypes.EDIT_TAG, payload: data})
    } catch (e) {
      const errorData = (e as AxiosError).response?.data as {message?: string}
      dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: errorData?.message || 'Set me error'
      })
    }
  }
}

export const getUserByTag = (tag: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      const token = typeof window !== 'undefined'
      ? localStorage.getItem('token')
      : null
      const {data} = await axios.get<IUser>(`${SERVER_URL}/user/find/${tag}`, {headers: {'Authorization': `Bearer ${token}`}})
      dispatch({type: UserActionTypes.GET_USER_BY_TAG, payload: data})
    } catch (e) {
      const errorData = (e as AxiosError).response?.data as {message?: string}
      dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: errorData?.message || 'Set me error'
      })
    }
  }
}

export const removeFriend = (): UserAction => ({
  type: UserActionTypes.REMOVE_FRIEND
})