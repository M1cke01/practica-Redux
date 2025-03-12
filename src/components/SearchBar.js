import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, resetResults } from "../Redux/slices/searchSlice";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const { results, loading, error } = useSelector(state => state.search);

    const handleSearch = () => {
        if (query.trim() !== "") {
            dispatch(fetchSongs(query));
        }
    };

    return (
        <div>
            <input
                type= "text"
                vaoue= {query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar canciones..."
            />
            <button onClick={handleSearch} disabled={loading}>
                {loading ? "Buscando..." : "Buscar"}
            </button>
            <button onClick={() => dispatch(resetResults())}>
                Limpiar
            </button>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            <ul>
                {results?.map(song => (
                    <li key={song.id}>{song.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;