import React, { useState, useContext } from "react";
import "./header.css";
import { SongsContext } from "../../context/SongsContext";
import { fetchSongs } from "../../actions/songsActions";
//const API_URL = "https://api.lyrics.ovh";

const Header = () => {
  const [inputValue, setinputValue] = useState("");
  const { dispatch } = useContext(SongsContext);
  const formHandler = (e) => {
    e.preventDefault();
    dispatch((dispatch) => fetchSongs(dispatch, inputValue)); // 1h18min
  };

  return (
    <header>
      <h1>Canciones Piolas App</h1>
      <form id="form">
        <input
          type="text"
          id="search"
          placeholder="Canción o Artista...."
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <button onClick={formHandler}>Buscar</button>
      </form>
    </header>
  );
};

export default Header;
