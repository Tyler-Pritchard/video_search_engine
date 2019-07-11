import {
  combineReducers
} from "redux";
import items from "./items";
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  items
});