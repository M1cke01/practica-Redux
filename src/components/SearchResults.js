import React from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../Redux/LibraryActions";

const SearchResults = ({ songs = [] }) => {
    const dispatch = useDispatch();
    

    return (
        <div>
            <h2>Resultados de busqueda</h2>
            {songs.length === 0 ? (
                <p>No hay resultados</p>
            ) : (
                <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.title} - {song.artist} ({song.album})
                        <button onClick={() => dispatch(addSong(song))}>Agregar a mi biblioteca</button>
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};

export default SearchResults;