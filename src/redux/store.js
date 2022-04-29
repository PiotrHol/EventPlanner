import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventsReducer } from "./reducers/eventsSlice";
import thunkMiddleware from "redux-thunk";

const store = createStore(eventsReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;