import React from "react";
import Song from "../song/Song";
import "./songs-list.css";

const Songslist = ({ songs, error, loading, displaySong, fetchSongs}) => {
  return (
    <>
      <ul className="songs">
        {
        songs?.data.map((song) => (
          <Song key={song.id} song={song} displaySong={displaySong}/> // song va a ser el item del array, que es un objeto, y key es pedido por React cada vez que se renderiza una lista, o elementos creados por un map o forEach
        ))}
        {/* {error && <ErrorBoundary />} // todavía no creado
        {loading && <Loading />}       // todavía no creado */}     
      </ul>

      {/* https://cors-anywhere.herokuapp.com/corsdemo - para solicitar acceso limitado. */}
      <div className="container centered">
        {songs?.prev ? 
        (<button className="btn" onClick={() => fetchSongs(`https://cors-anywhere.herokuapp.com/${songs.prev}`)}>Anterior</button>) : ('')
        }
        {
        songs?.next ?   
        (<button className="btn" onClick={()=> fetchSongs(`https://cors-anywhere.herokuapp.com/${songs.next}`)}>Siguiente</button>) : ('')
        }
      </div>
    </>
  );
};

export default Songslist;
