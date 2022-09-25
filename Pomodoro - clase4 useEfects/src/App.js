import React from 'react';
import { createRoot } from 'react-dom/client'; // Render for React 18
// eslint-disable-next-line import/no-unresolved
import Pomodoro from './Pomodoro';

function App() {
  return <Pomodoro />;
}

// Render for React 18:
const createdEl = createRoot(document.getElementById('root'));
createdEl.render(<App></App>);
