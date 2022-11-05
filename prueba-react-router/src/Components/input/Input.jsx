import React, { useReducer, useEffect } from 'react';
import { validate } from '../../utils/validators';
import './input.css';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case 'TOUCHE':
      return {
        ...state,
        isTouch: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  let initialState = {
    value: props.initValue || '',
    isValid: props.initValid || false,
    isTouch: false,
  };
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const { value, isValid } = inputState;
  const { onInput, id } = props;

  useEffect(() => {
    onInput(id, value, isValid);
    //console.log(id, value, isValid);
  }, [isValid, value, onInput, id]);

  const inputHandle = (e) => {
    e.preventDefault();
    let onInputValue = e.target.value;
    dispatch({
      type: 'INPUT',
      value: onInputValue,
      validators: props.validators,
    });
  };
  const blurHandle = () => {
    dispatch({
      type: 'TOUCHE',
    });
  };

  return (
    <div
      className={`inputCtn ${
        !inputState.isValid && inputState.isTouch ? 'inputInvalidDiv' : ''
      }`}>
      <label>{props.name}</label>
      <input
        type={props.type}
        name={props.name}
        onChange={inputHandle}
        onBlur={blurHandle}
        id={props.id}
        className={`${props.class} ${
          !inputState.isValid && inputState.isTouch ? 'inputInvalid' : ''
        }`}
        value={inputState.value}
      />
      <span>
        {!inputState.isValid && inputState.isTouch ? props.errorText : ''}
      </span>
    </div>
  );
};

export default Input;
