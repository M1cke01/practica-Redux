import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState= {
    results: [],
    loading: false,
    error: null
};

export const fetchSongs = createAsyncThunk(
    "search/fetchSongs",
    async (query, { rejectWithValue }) => {

        console.log ("fetchsongs fue llamado:", query);
        
        try {
            console.log("iniciando la app");
            const token = "Tu spoty";
            const response = await axios.get (`https://api.spotify.com/v1/search`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: query,
                    type: "track",
                }
            });

            console.log("Respuesta de la API:", response);
            
            const data = response.data;
            return data.songs;
        } catch (error) {
            console.error("Error al cargar las canciones:", error);
            return rejectWithValue(error.message);
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        resetResults: (state) => {
            state.results = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSongs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSongs.fulfilled, (state, action) => {
                state.results = action.payload;
                state.loading = false;
            })
            .addCase(fetchSongs.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
    }
});

export const { resetResults } = searchSlice.actions;

export default searchSlice.reducer;