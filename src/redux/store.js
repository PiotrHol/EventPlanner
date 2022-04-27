import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { eventsReducer } from "./reducers/eventsSlice";

const store = createStore(eventsReducer, composeWithDevTools());

export default store;