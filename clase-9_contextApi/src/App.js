import React /* , { useState, useEffect } */ from "react";
// import useFetch from './hooks/useFetch';
import "./App.css";

import Header from "./components/header/Header.jsx";
import Songslist from "./components/songslist/Songs-list.jsx";
// import Lyric from './components/lyric/Lyric';
// import $ from "jquery";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Songslist />
      </div>
    </>
  );
}

export default App;
