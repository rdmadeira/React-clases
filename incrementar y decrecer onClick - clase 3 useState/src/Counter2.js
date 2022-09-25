import React, { useReducer } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const reducer = (state, action) => {
  switch (action) {
    case 'sumar':
      return {
        ...state,
        counter: state.counter + 1,
        error: null,
      };

    case 'restar':
      return {
        ...state,
        counter: state.counter - 1 < 0 ? 0 : state.counter - 1,
        error: state.counter - 1 < 0 ? 'No puede ser menor que 0' : null,
      };

    case 'delError':
      return {
        ...state,
        error: null,
      };
    default:
      throw new Error();
  }
};

const Counter2 = () => {
  const initialState = { counter: 0, error: null };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    return dispatch('sumar');
  };

  const handleSubstract = () => {
    return dispatch('restar');
  };

  const cleanError = () => {
    return dispatch('delError');
  };

  const element = (
    <div>
      <div className="counter">
        <div>
          <button className="btn" type="button" onClick={handleAdd}>
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        </div>
        <div>{state.counter}</div>
        <div>
          <button className="btn" type="button" onClick={handleSubstract}>
            <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
          </button>
        </div>
      </div>
      {state.error && (
        <div>
          <center>
            <button className="btn" type="button" onClick={cleanError}>
              Reset Error
            </button>
            <p>{state.error}</p>
          </center>
        </div>
      )}
    </div>
  );
  return element;
};

export default Counter2;
