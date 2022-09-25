import React from 'react';
// Podria ser import {render} from "react-dom"
import { render } from 'react-dom';
// import { createRoot } from 'react-dom/client';

import Counter from './Counter';
import Counter2 from './Counter2';

const App = () => {
  // Counter es un component usando 2 estados: count y error.
  // Counter2 es un component usando 1 useReducer, con el estado como un objeto y su función reducer (actions)
  return (
    <>
      <Counter></Counter>
      <Counter2></Counter2>
    </>
  );
};

// Para React 18: **************************************
// const root = document.getElementById('root');
// const createEl = createRoot(root);
// createEl.render(<App tab="home"></App>);
// // *****************************************************

render(React.createElement(App), document.getElementById('root'));
