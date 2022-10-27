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
      <Header />
      <div className="container">
        {!songsState.showLyric ? (
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
