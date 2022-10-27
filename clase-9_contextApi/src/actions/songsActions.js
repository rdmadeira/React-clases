import { ENDPOINT, ENDPOINT_LYRIC, CORS_URL } from "../constants/endpoints";
import $ from "jquery";

export const fetchSongs = (dispatch, suggest, proxy = false) => {
  const url = proxy ? CORS_URL + "/" + proxy : `${ENDPOINT}/suggest/${suggest}`;
  dispatch({ type: "LOADING" });
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "SONGS_RESPONSE",
        payload: {
          songs: data.data,
          prev: data.prev,
          next: data.next,
        },
      })
    ); // payload es el nombre de la propriedad del objeto action que se usa en Redux que trae la información
};

export const fetchLyric = (dispatch, artist, song) => {
  const url = `${CORS_URL}/${ENDPOINT_LYRIC}?artist=${artist}&song=${song}`;
  dispatch({ type: "LOADING" });
  const data = null;

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      const datos = this;
      let $xml = $($.parseXML(datos.responseText));

      $xml.find("Lyric").each(function (index, elem) {
        const lyric = elem.firstChild.nodeValue;

        dispatch({
          type: "LYRIC_RESPONSE",
          artist: artist,
          payload: {
            song: { artist: artist, title: song, lyric: lyric },
          },
        });
      });
    }
  });

  xhr.open("GET", url);

  xhr.send(data); // payload es el nombre de la propriedad del objeto action que se usa en Redux que trae la información
};
