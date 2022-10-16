import React from "react";
import Song from "../song/Song";
import "./songs-list.css";

const Songslist = ({ songs, error, loading }) => {
  return (
    <>
      <ul className="songs">
        {
        songs?.data.map((song) => (
          <Song key={song.id} song={song} /> // song va a ser el item del array, que es un objeto, y key es pedido por React cada vez que se renderiza una lista, o elementos creados por un map o forEach
        ))}
        {/* {error && <ErrorBoundary />} // todavía no creado
        {loading && <Loading />}       // todavía no creado */}     
      </ul>
    </>
  );
};

export default Songslist;
