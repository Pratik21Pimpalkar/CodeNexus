import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUserReducer";
import questionReducer from './questionReducer'

export const reducers = combineReducers({
    authReducer, 
    currentUserReducer,
    questionReducer
});