import React from "react";
import Song from "../song/Song.jsx";
import "./songs-list.css";

const Songslist = ({ songs = [] }) => {
  return (
    <>
      <ul className="songs">
        {songs?.map((song) => (
          <Song key={song.id} song={song} /> // song va a ser el item del array, que es un objeto, y key es pedido por React cada vez que se renderiza una lista, o elementos creados por un map o forEach
        ))}
        {/* {error && <ErrorBoundary />} // todavía no creado
        {loading && <Loading />}       // todavía no creado */}
      </ul>

      {/* https://cors-anywhere.herokuapp.com/corsdemo - para solicitar acceso limitado. */}
      <div className="container centered">
        {songs?.prev ? <button className="btn">Anterior</button> : ""}
        {songs?.next ? <button className="btn">Siguiente</button> : ""}
      </div>
    </>
  );
};

export default Songslist;
