import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

const reducer = combineReducers({
  auth: authReducer
})
export type RootState = ReturnType<typeof reducer>

const store = configureStore({reducer});
export default store