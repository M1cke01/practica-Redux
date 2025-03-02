import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../Redux/LibraryActions";

const Library = () => {
    const songs = useSelector((state) => state.library.songs);
    const dispatch = useDispatch();

    const handleRemove = (id) => { // Verifica que la acción sea despachada
        dispatch(removeSong(id));
    };

    return (
        <div>
            <h2>Mi biblioteca</h2>
            <ul>
                {songs.length === 0 ? (
                    <p>No hay canciones en la biblioteca</p> // Mensaje si no hay canciones
                ) : (
                    songs.map((song) => (
                        <li key={song.id}>
                            {song.title} - {song.artist}
                            <button onClick={() => handleRemove(song.id)}>Eliminar</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Library;
