import React /* , { useState, useCallback, useMemo } */ from 'react';
import { createRoot } from 'react-dom/client';
import InputText from './InputText';
import Date from './Date';
import Clickbutton from './Clickbutton';
import './style.css';
const App = () => {
  return (
    <>
      <h2>
        Usando componentes independientes, al cambiar un estado, no renderiza
        todo el App, solamente el componente.
      </h2>
      <InputText />
      <Date />
      <Clickbutton />
    </>
  );
};

/* const App2 = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);

  const set1 = () => setCounter1((prev) => prev + 1);
  const set2 = useMemo(() => setCounter2((prev) => prev + 1), []);
  const set3 = useCallback(() => setCounter3((prev) => prev + 1), []);

  return (
    <div>
      <div>
        <button onClick={set1}>Contador {counter1}</button>
      </div>
      <div>
        <button onClick={set2}>Contador useMemo {counter2}</button>
      </div>
      <div>
        <button onClick={set3}>Contador useCallback {counter3}</button>
      </div>
    </div>
  );
}; */

const createdEl = createRoot(document.getElementById('root'));
createdEl.render(<App />);
