import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import deedReducer from './reducers/deedReducer';

const reducer = combineReducers({
  auth: authReducer,
  deeds: deedReducer
})
export type RootState = ReturnType<typeof reducer>

const store = configureStore({reducer});
export default store