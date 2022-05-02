// create store here
import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { reducer } from "./reducer";
const rootReducer = combineReducers({
  reducer,
})
export const store = legacy_createStore(rootReducer);

// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}
