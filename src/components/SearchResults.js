import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../Redux/slices/searchSlice";
import { addSong } from "../Redux/slices/librarySlice";

const SearchResults = ({ songs = [] }) => {
    const dispatch = useDispatch();
    const librarySongs = useSelector((state) => state.library.songs);
    const { results, loading, error } = useSelector((state) => state.search);
    const [songToAdd, setSongToAdd] = useState(null);

    useEffect(() => {
        if (songs.length > 0) {
            console.log("Cargando canciones...", songs);
            dispatch(fetchSongs(songs));
        }
    }, [songs, dispatch]);

    const handleAddSong = (song) => {
        const isSongInLibrary = librarySongs.some((librarySong) => librarySong.id === song.id);

        if (isSongInLibrary) {
            alert("Intentas agregar una canción existente");
        } else {
            dispatch(addSong(song));
            setSongToAdd(null); // Limpiar la canción seleccionada
        }
    };

    const handleShowSongBeforeAdd = (song) => {
        setSongToAdd(song); // Establecer la canción para confirmar antes de agregar
    };

    const handleAddMultipleSongs = () => {
        let index = 0;
        const songsArray = songs;

        const showNextSong = () => {
            setSongToAdd(songsArray[index]);

            // Incrementamos el índice y lo reiniciamos si llega al final
            index = (index + 1) % songsArray.length;

            // Llamamos a la siguiente canción después de tantos segundo
            setTimeout(showNextSong, 3500);
        };

        // Iniciamos el ciclo de mostrar canciones
        showNextSong();
    };

    return (
        <div>
            <h2>Resultados de búsqueda</h2>
            {loading && <p>Cargango canciones...</p>}
            {error && <p>Error: {error}</p>}
            {results.length === 0 && !loading ? (
                <p>No se encontraron canciones</p>
            ) : (
                <ul>
                    {songs.map((song) => (
                        <li key={song.id}>
                            {song.title} - {song.artist} ({song.album})
                            <button onClick={() => handleShowSongBeforeAdd(song)}>
                                Agregar a mi biblioteca
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            {songToAdd && (
                <div>
                    <h3>Canciones disponibles</h3>
                    <p>{songToAdd.title} - {songToAdd.artist} ({songToAdd.album})</p>
                    <button onClick={() => handleAddSong(songToAdd)}>Agregar canción</button>
                    <button onClick={() => setSongToAdd(null)}>Cancelar</button>
                </div>
            )}

            <button onClick={handleAddMultipleSongs}>Ver canciones</button>
        </div>
    );
};

export default SearchResults;
