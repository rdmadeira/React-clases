import { render } from "@testing-library/react";
import React from "react";
import * as ReactDOM from 'react-dom/client';
import Clock from "./main";

function App() {
  return (
    <div className="App">
      <Clock></Clock>
    </div>
  );
}

const createdEl = ReactDOM.createRoot(document.getElementById('root'));
createdEl.render(
  <App></App>
)