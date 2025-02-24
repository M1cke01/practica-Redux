import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeSong } from "../Redux/LibraryActions";

const Library = () => {
    const songs = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Mi biblioteca</h2>
            <ul>
                {songs.map((song) => (
                    <li key={song.id}>
                        {song.title} - {song.artist} ({song.album})
                        <button onClick={() => dispatch(removeSong(song.id))}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Library;