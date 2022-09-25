import React, { useState } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(null);
  const handleAdd = () => {
    setCounter(counter + 1);
    setError(null);
  };
  const handleSubstract = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    } else {
      setError('Tiene que ser mayor que cero');
    }
  };
  const element = (
    <div>
      <div className="counter">
        <div>
          <button className="btn" type="button" onClick={handleAdd}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        <div>{counter}</div>
        <div>
          <button className="btn" type="button" onClick={handleSubstract}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {error && (
        <div>
          <center>
            <button
              className="btn"
              type="button"
              onClick={() => setError(null)}>
              Reset Error
            </button>
            <p>{error}</p>
          </center>
        </div>
      )}
    </div>
  );

  return element;
};

export default Counter;
