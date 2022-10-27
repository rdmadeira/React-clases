import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContext.js";
import Song from "../song/Song.jsx";
import "./songs-list.css";
import { fetchSongs } from "../../actions/songsActions.js";

const Songslist = () => {
  const { songsState, dispatch } = useContext(SongsContext);

  const showPrev = () => {
    dispatch((dispatch) => fetchSongs(dispatch, "", songsState.prev));
  };

  const showNext = () => {
    dispatch((dispatch) => fetchSongs(dispatch, "", songsState.next));
  };

  return (
    <>
      <ul className="songs">
        {songsState.songs?.map((song) => (
          <Song key={song.id} song={song} /> // song va a ser el item del array, que es un objeto, y key es pedido por React cada vez que se renderiza una lista, o elementos creados por un map o forEach
        ))}
        {/* {error && <ErrorBoundary />} // todavía no creado
        {loading && <Loading />}       // todavía no creado */}
      </ul>

      {/* https://cors-anywhere.herokuapp.com/corsdemo - para solicitar acceso limitado. */}
      <div className="container centered">
        {songsState.prev ? (
          <button className="btn" onClick={showPrev}>
            Anterior
          </button>
        ) : (
          ""
        )}
        {songsState.next ? (
          <button className="btn" onClick={showNext}>
            Siguiente
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Songslist;
