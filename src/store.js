import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const reducers = combineReducers({});
const middleware = [thunk];
const initialState = [];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;