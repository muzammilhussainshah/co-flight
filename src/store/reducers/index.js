import { combineReducers } from "redux";
import Auth from "./auth";
import Event from "./events";
var reducers = combineReducers({
  auth: Auth,
  events: Event,
});

export default reducers;
