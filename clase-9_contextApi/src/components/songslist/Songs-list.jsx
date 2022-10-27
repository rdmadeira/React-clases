import React, { useContext } from "react";
import { SongsContext } from "../../context/SongsContext.js";
import Song from "../song/Song.jsx";
import "./songs-list.css";

const Songslist = () => {
  const { songsState } = useContext(SongsContext);
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
        {songsState.prev ? <button className="btn">Anterior</button> : ""}
        {songsState.next ? <button className="btn">Siguiente</button> : ""}
      </div>
    </>
  );
};

export default Songslist;
