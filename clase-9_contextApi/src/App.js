import React, { useContext /* , { useState, useEffect } */ } from "react";
// import useFetch from './hooks/useFetch';
import "./App.css";
import Header from "./components/header/Header.jsx";
import Songslist from "./components/songslist/Songs-list.jsx";
import Lyric from "./components/lyric/Lyric.jsx";
import { SongsContext } from "./context/SongsContext";
// import $ from "jquery";

function App() {
  const { songsState } = useContext(SongsContext);
  return (
    <>
      <p style={{ textAlign: "center" }}>
        Hay que activar el cors para las letras:
        https://cors-anywhere.herokuapp.com
      </p>
      <Header />
      <div className="container">
        {songsState.loading ? (
          <p>Loading ....</p>
        ) : !songsState.showLyric ? (
          <Songslist />
        ) : (
          <Lyric
            lyric={songsState.lyric}
            artist={songsState.artist}
            songTitle={songsState.songTitle}
          />
        )}
      </div>
    </>
  );
}

export default App;
