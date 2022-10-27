import React, { useContext } from "react";
import { fetchLyric } from "../../actions/songsActions";
import { SongsContext } from "../../context/SongsContext";

const Song = ({ song }) => {
  const { dispatch } = useContext(SongsContext);
  const getLyrics = (e) => {
    e.preventDefault();
    dispatch((dispatch) => fetchLyric(dispatch, song.artist.name, song.title));
  };
  return (
    <>
      <li>
        <span>
          <strong>{song.artist.name}</strong> - {song.title}{" "}
        </span>
        <button className="btn" onClick={getLyrics}>
          Letra
        </button>
      </li>
    </>
  );
};

export default Song;
