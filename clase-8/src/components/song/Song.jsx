import React from "react";

const Song = ({ song, displaySong }) => {
  
  
  return (
    <>
      <li>
        <span>
          <strong>{song.artist.name}</strong> - {song.title}{" "}
        </span>
        <button className="btn" onClick={() => displaySong(song.artist.name, song.title)}>Letra</button>
      </li>
    </>
  );
};

export default Song;
