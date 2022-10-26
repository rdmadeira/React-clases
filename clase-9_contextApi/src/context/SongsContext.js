import React, { createContext, useReducer } from "react";

export const SongsContext = createContext();

const songsReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SONGS_RESPONSE":
      return {
        ...state,
        loading: false,
        songs: action.payload.songs,
      };

    default:
      return state;
  }
};

const initialState = {
  songs: [],
  loading: false,
  error: null,
  showLyric: false,
  artist: null,
  songTitle: null,
  prev: null,
  next: null,
};

// Para funciones asincronas, no basta transmitir el dispatch, tenemos que usar un 'thunk', que es una función que retorna los parametros de la función.
const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // se creó una función dispatch customizada corre el dispatch de forma customizada. La acción puede también ser una función,
  // si es así, la corremos con parametro dispatch. Esta accion en forma de función puede ser asíncrona.
  const myDispatch = (action) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, myDispatch];
};

export const SongsProvider = ({ children }) => {
  const [songsState, dispatch] = useThunkReducer(songsReducer, initialState);

  const value = { songsState, dispatch };

  // Lo bueno de useReducer con Context es que el dispatch es pasado para cualquier componente de la App y cambiar el estado global,
  // en este caso, 'songsState'. Se transmite con el objeto value.
  return (
    <SongsContext.Provider value={value}>{children}</SongsContext.Provider>
  );
};
