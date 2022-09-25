import React, { useEffect, useRef, useState, useCallback } from 'react';

import { createRoot } from 'react-dom/client';

import './style.css';

import FactorialOf from './FactorialOf';

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const miInput = useRef();

  const [factorialNum, setFactorialNum] = useState(0);
  const [factorialNum2, setFactorialNum2] = useState(0);

  /* La diferencia entre incrementNum y incrementNum2 es que este ultimo est'a usando el hook useCallback de React, la función persiste, 
  y al comparar los 2 props (num y increment), React ve que no cambió y no se renderiza este component. La función incrementNum no persiste, 
  y notase que se rerenderiza todo el tiempo, cuando cambia el estado de counter
  El componente está usando React.memo, para no renderizar, y el useCallback ayuda a persistir la función*/

  const incrementNum = () => {
    setFactorialNum((n) => n + 1);
  };
  const incrementNum2 = useCallback(() => {
    setFactorialNum2((n) => n + 1);
  }, []);

  const stopCounter = () => {
    return clearInterval(id.current);
  };

  // UseRef() Persiste un estado o un valor mismo cuando se renderiza, pero no hace el re-render como el useState.
  // Guarda una referencia a un elemento del DOM
  let id = useRef();
  useEffect(() => {
    id.current = setInterval(() => {
      document.title = 'Primera Aplicación';
      setCounter((c) => c + 1);
    }, 1000);
    return () => stopCounter();
  }, []);

  return (
    <div>
      <h1>
        Hola, {props.name} {props.lastname}
      </h1>
      <div>
        <h3>{counter}</h3>
        <button onClick={stopCounter}>Stop</button>
      </div>
      <div>
        <input type="text" ref={miInput} />
        <button onClick={() => miInput.current.focus()}>Focus</button>
      </div>
      <FactorialOf num={factorialNum} increment={incrementNum}></FactorialOf>
      <FactorialOf num={factorialNum2} increment={incrementNum2}></FactorialOf>
    </div>
  );
};

const createdEl = createRoot(document.getElementById('root'));
createdEl.render(<App name="Rodrigo" lastname="Nascimento"></App>);
