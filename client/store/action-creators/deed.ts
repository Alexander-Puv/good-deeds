import { SERVER_URL } from "@/http";
import IDeed, { DeedAction, DeedActionTypes } from "@/types/deed";
import axios from "axios";
import { Dispatch } from "react";

export const setDeeds = (deeds: IDeed[]): DeedAction => ({
  type: DeedActionTypes.SET_DEEDS,
  payload: deeds
})

export const addDeed = (token: string, text: string) => {
  return async (dispatch: Dispatch<DeedAction>) => {
    const {data} = await axios.post<IDeed>(`${SERVER_URL}/deed`, {text}, {headers: {'Authorization': `Bearer ${token}`}})
    dispatch({type: DeedActionTypes.ADD_DEED, payload: data})
  }
}

export const toggleDeedChecked = (token: string, deedId: number, checked: boolean) => {
  return async (dispatch: Dispatch<DeedAction>) => {
    const {data} = await axios.put<IDeed>(`${SERVER_URL}/deed/${deedId}`, {checked}, {headers: {'Authorization': `Bearer ${token}`}})
    dispatch({type: DeedActionTypes.TOGGLE_DEED_CHECKED, payload: data})
  }
}

export const setDeedText = (token: string, deedId: number, text: string) => {
  return async (dispatch: Dispatch<DeedAction>) => {
    const {data} = await axios.put<IDeed>(`${SERVER_URL}/deed/${deedId}`, {text}, {headers: {'Authorization': `Bearer ${token}`}})
    dispatch({type: DeedActionTypes.SET_DEED_TEXT, payload: data})
  }
}

export const deleteDeed = (token: string, deedId: number) => {
  return async (dispatch: Dispatch<DeedAction>) => {
    const {data} = await axios.delete<IDeed>(`${SERVER_URL}/deed/${deedId}`, {headers: {'Authorization': `Bearer ${token}`}})
    dispatch({type: DeedActionTypes.DELETE_DEED, payload: data.id})
  }
}