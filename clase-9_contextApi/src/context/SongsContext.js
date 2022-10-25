import React, { createContext } from "react";

export const SongsContext = createContext();

export const SongsProvider = ({ children }) => {
  return (
    <SongsContext.Provider value={{ hola: "hola amigo" }}>
      {children}
    </SongsContext.Provider>
  );
};
