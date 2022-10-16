import React, { useState } from "react";
import "./header.css";

const Header = ({ suggestValue }) => {
  const [inputValue, setinputValue] = useState("");

  function valueHandle(e) {
    const string = e.target.value;
    setinputValue(string);
  }

  function formHandler(e) {
    e.preventDefault();
    suggestValue(inputValue);
  }

  return (
    <header>
      <h1>Canciones Piolas App</h1>
      <form id="form">
        <input
          type="text"
          id="search"
          placeholder="Canción o Artista...."
          onChange={valueHandle}
          value={inputValue}
        />
        <button onClick={formHandler}>Buscar</button>
      </form>
    </header>
  );
};

export default Header;
