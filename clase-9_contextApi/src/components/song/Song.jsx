import React from "react";

const Song = ({ song }) => {
  return (
    <>
      <li>
        <span>
          <strong>{song.artist.name}</strong> - {song.title}{" "}
        </span>
        <button className="btn">Letra</button>
      </li>
    </>
  );
};

export default Song;
