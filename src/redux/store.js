
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./blog/filterReducer";
const store = createStore(filterReducer,composeWithDevTools());

export default store;
