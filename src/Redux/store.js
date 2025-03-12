import libraryReducer from "./slices/librarySlice"
import searchReducer from "./slices/searchSlice"
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        library: libraryReducer,
        search: searchReducer,
    }
});

export default store;