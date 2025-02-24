import { createStore } from "redux";
import LibraryReducer from "./LibraryReducer";

const store = createStore(LibraryReducer);

export default store;