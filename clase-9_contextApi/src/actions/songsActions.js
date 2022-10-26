import { ENDPOINT, ENDPOINT_LYRIC, CORS_URL } from "../constants/endpoints";

export const fetchSongs = (dispatch, suggest) => {
  dispatch("LOADING");
  fetch(`${ENDPOINT}/${suggest}`)
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "SONGS_RESPONSE",
        payload: {
          songs: data.data,
        },
      })
    ); // payload es el nombre de la propriedad que se usa en Redux que trae la información
};
