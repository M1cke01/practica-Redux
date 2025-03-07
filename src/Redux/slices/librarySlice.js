import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    songs: [],
};

const librarySlice = createSlice ({
    name: "library",
    initialState,
    reducers: {
        addSong: (state, action) => {
            if (!state.songs.some(song => song.id === action.payload.id)) {
                state.songs.push(action.payload);
            }
        },
        removeSong: (state, action) => {
            state.songs = state.songs.filter(song => song.id !== action.payload);
        }
    }
});

export const { addSong, removeSong } = librarySlice.actions;

export default librarySlice.reducer;