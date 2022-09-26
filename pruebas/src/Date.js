import React, { useState, useEffect } from 'react';

const Data = () => {
  let [hora, setHora] = useState(new Date().toLocaleString());
  useEffect(() => {
    let id = setInterval(() => setHora(new Date().toLocaleString()), 1000);

    return () => {
      clearInterval(id);
    };
  }, [hora]);

  return (
    <div>
      <p>Hora atual: {hora}</p>
    </div>
  );
};

export default Data;
