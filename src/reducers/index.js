import { combineReducers } from "redux";
import counter from "./counter";
import changer from "./titleChanger";

const rootReducer = combineReducers({
  counter,
  changer,
});

export default rootReducer;
