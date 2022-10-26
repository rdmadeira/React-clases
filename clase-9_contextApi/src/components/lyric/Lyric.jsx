import React from "react";

const Lyric = ({ songTitle, lyric, artist }) => {
  const letra = lyric.replace(/(\r\n|\r|\n)/g, "<br>");

  function createMarkup() {
    return { __html: letra };
  }

  return (
    <div>
      <h2>
        <strong>{artist}</strong> - {songTitle}{" "}
      </h2>

      <span dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};

export default Lyric;
