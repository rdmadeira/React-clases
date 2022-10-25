import React, { useState, useContext } from "react";
import "./header.css";
import { SongsContext } from "../../context/SongsContext";
//const API_URL = "https://api.lyrics.ovh";

const Header = () => {
  const [inputValue, setinputValue] = useState("");
  const { hola } = useContext(SongsContext);
  const formHandler = () => {};

  return (
    <header>
      <h1>{hola}, Canciones Piolas App</h1>
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
