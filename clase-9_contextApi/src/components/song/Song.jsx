import React, { useContext } from "react";
import { fetchLyric } from "../../actions/songsActions";
import { SongsContext } from "../../context/SongsContext";
import "./song.css";

const Song = ({ song }) => {
  const { dispatch } = useContext(SongsContext);
  const getLyrics = (e) => {
    e.preventDefault();
    dispatch((dispatch) => fetchLyric(dispatch, song.artist.name, song.title));
  };
  return (
    <>
      <li>
        <span id="song">
          <strong>{song.artist.name}</strong> - {song.title}{" "}
        </span>
        <button className="btn" id="lyricBtn" onClick={getLyrics}>
          Letra
        </button>
        <div id="audioCtn">
          <audio controls src={song.preview}>
            <track
              kind="captions"
              srcLang="en"
              label="english_captions"
            ></track>
          </audio>
        </div>
      </li>
    </>
  );
};

export default Song;
