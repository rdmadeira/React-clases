import React, { useState, useEffect } from 'react';
import './style.css';

// Funcion Padtime es para agregar un cero si no tiene un numero a la izquierda.
// Para que se queda siempre con 2 digitos. Eso se ocupa el método padStart.
function padTime(time) {
  return time.toString().padStart(2, '0');
}

const Pomodoro = () => {
  // Los estados vienen arriba antes de todo
  const [title, setTitle] = useState('Arrancar sesion...'); // UseState devuelve un array [state, setState] !
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(Math.floor(timeLeft - minutes * 60));

  const startTimer = () => {
    setTitle('Focus!!!');
    setIsRunning(true);
  };

  const stopTimer = () => {
    setTitle('Ok, te espero!!!');
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTitle('Go Again!!');
    setTimeLeft(25 * 60);
    setIsRunning(false);
  };
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => {
          // Este timeLeft es el snapshot del timeLeft anterior, se uso el timeLeft directamente, me da el timeLeft actualizado
          return timeLeft - 1;
        });
      }, 1000);
    }

    return () => {
      // intervalo, o un obserbable o un websocket peticion hay limpiar para que no se quede generando tiempo desnecesário al desmontar erl componente padre.
      clearInterval(interval);
    };
  }, [isRunning]); // El efecto irá correr siempre cuando isRunning sufre cambio y al arrancar

  return (
    <div className="app">
      <h2>{title}</h2>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && <button onClick={() => startTimer()}>Start</button>}
        {isRunning && <button onClick={() => stopTimer()}>Stop</button>}
        <button onClick={() => resetTimer()}>Reset</button>
      </div>
    </div>
  );
};

export default Pomodoro;
