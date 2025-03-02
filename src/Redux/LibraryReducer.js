const initialState = {
    songs: [],
};

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SONG":
            if (state.songs.some(song => song.id === action.payload.id)) {
                return state;
            }
            return {...state, songs: [...state.songs, action.payload] };

        case "REMOVE_SONG":
            return {...state, songs: state.songs.filter(song => song.id !== action.payload) };

        default:
            return state;
    }
};

export default libraryReducer;