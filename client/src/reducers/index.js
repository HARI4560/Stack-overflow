import { combineReducers } from "redux";
import authReducer from "./auth";
import questionsReducer from "./questions";
import usersReducer from "./users";
import currentUserReducer from './currentUserReducer'

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
})