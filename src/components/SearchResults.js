import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../Redux/LibraryActions";

const SearchResults = ({ songs = [] }) => {
    const dispatch = useDispatch();
    const librarySongs = useSelector((state) => state.library.songs);
    const [songToAdd, setSongToAdd] = useState(null);

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

    const songsToAdd = [
        { id: 1, title: "Teka", artist: "Peso Pluma", album: "Unknow"},
        { id: 2, title: "Not Afraid", artist: "Eminem", album: "Unknow"},
        { id: 3, title: "Hollywood", artist: "Peso Pluma", album: "Unknow"},
        { id: 4, title: "Gervonta", artist: "Peso Pluma", album: "Unknow"},
        { id: 5, title: "Mision 0", artist: "C-Kan", album: "Unknow"},
        { id: 6, title: "VNDO", artist: "Dharius", album: "Unknow"},
        { id: 7, title: "Aclarando muchas cosas", artist: "Codidiciado", album: "Unknow"},
        { id: 8, title: "Vato sencillo", artist: "Cartel de Santa", album: "Unknow"},
        { id: 9, title: "Barcelona", artist: "Alan Walker", album: "Unknow"},
        { id: 10, title: "Mision 1", artist: "C-Kan", album: "Unknow"},
    ];

    const handleAddMultipleSongs = () => {
        let index = 0;

        const showNextSong = () => {
            setSongToAdd(songsToAdd[index]);

            // Incrementamos el índice y lo reiniciamos si llega al final
            index = (index + 1) % songsToAdd.length;

            // Llamamos a la siguiente canción después de 1 segundo
            setTimeout(showNextSong, 3500);
        };

        // Iniciamos el ciclo de mostrar canciones
        showNextSong();
    };

    return (
        <div>
            <h2>Resultados de búsqueda</h2>
            {songs.length === 0 ? (
                <p></p>
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
