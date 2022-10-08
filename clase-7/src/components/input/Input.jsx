import React, { useReducer } from 'react';
import './input.css';
import { validate } from '../../utils/validators';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      console.log(state);
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCHE':
      return {
        ...state,
        isTouche: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouche: false,
  });

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };

  const toucheHandler = () => {
    dispatch({
      type: 'TOUCHE',
    });
  };

  const element =
    props.element === 'input' ? (
      <input
        placeholder={props.placeholder}
        type={props.type}
        id={props.id}
        name={props.id}
        onChange={changeHandler}
        onBlur={toucheHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        onChange={changeHandler}
        onBlur={toucheHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouche && 'form-control--invalid'
      }`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouche && (
        <p style={{ marginTop: '0', color: 'red' }}>{props.errorText}</p>
      )}
    </div>
  );
};

export default Input;
