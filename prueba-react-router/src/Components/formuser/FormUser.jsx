import React, { useReducer, useCallback } from 'react';
import { Form } from 'react-router-dom';
import Input from '../input/Input.jsx';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../utils/validators';
import './formuser.css';
import { useEffect } from 'react';
import { setUsername } from '../../utils/utils.js';

// Este componente tiene demasiadas funciones, habria que descomponer en otros componentes y/o hooks

function reducer(state, action) {
  switch (action.type) {
    case 'INPUT_CHANGE':
      // eslint-disable-next-line no-case-declarations
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          /* la expresion [action.inputId] está entre colchetes porque action.inputId es una variable */
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case 'SET_INPUTS':
      return {
        ...state,
        inputs: action.inputs,
        isValid: action.isValid,
        isLogin: action.isLogin,
      };
    case 'SUBMIT':
      return {
        ...state,
        submit: true,
        user: action.user,
        isValid: action.isValid,
      };

    default:
      return state;
  }
}

const FormUser = ({ users }) => {
  const [formState, dispatch] = useReducer(reducer, {
    submit: false,
    isValid: false,
    user: undefined,
    isLogin: null,
    inputs: {
      username: {
        value: '',
        isValid: false,
      },
    },
  });

  useEffect(() => {
    if (
      formState.submit &&
      formState.isLogin === false &&
      formState.inputs.name
    ) {
      formState.isLogin === true;
    }
  }, [formState.submit]);

  function onSubmitHandle(e) {
    e.preventDefault();

    const user =
      users.find((item) => item.username === formState.inputs.username.value) ||
      undefined;
    let isLogin = user ? true : false;
    console.log(user);
    isLogin &&
      dispatch({
        type: 'SET_INPUTS',
        isLogin: isLogin,
        inputs: {
          username: {
            value: formState.inputs.username?.value || '',
            isValid: formState.inputs.username?.isValid || false,
          },
          password: {
            value: formState.inputs.password?.value || '',
            isValid: formState.inputs.password?.isValid || false,
          },
        },
        isValid:
          formState.inputs.username?.isValid &&
          formState.inputs.password?.isValid,
      });

    isLogin === false &&
      dispatch({
        type: 'SET_INPUTS',
        isLogin: false,
        inputs: {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
          lastname: {
            value: '',
            isValid: false,
          },
        },
      });

    formState.isValid &&
      formState.isLogin &&
      dispatch({
        type: 'SUBMIT',
        submit: true,
        user: user,
        isValid: formState.isValid,
      });

    if (formState.isValid && !formState.isLogin) {
      dispatch({
        type: 'SUBMIT',
        submit: true,
        user:
          formState.inputs.name && formState.inputs.lastname
            ? setUsername({
                name: formState.inputs.name?.value,
                lastname: formState.inputs.lastname?.value,
                username: formState.inputs.username?.value,
                password: formState.inputs.password?.value,
              })
            : undefined,
        isValid: formState.isValid,
      });
    }
  }

  const inputHandle = useCallback((id, value, isValid) => {
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <>
      <Form method="post" id="form-username" onSubmit={onSubmitHandle}>
        {formState.isLogin === false && (
          <>
            <Input
              type="name"
              name="name"
              validators={[VALIDATOR_REQUIRE()]}
              id="name"
              errorText="Required"
              onInput={inputHandle}
            />
            <Input
              type="lastname"
              name="lastname"
              validators={[VALIDATOR_REQUIRE()]}
              id="lastname"
              errorText="Required"
              onInput={inputHandle}
            />
            <Input
              type="password"
              name="password"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
              id="password"
              errorText="Min 8 Characters"
              onInput={inputHandle}
            />
          </>
        )}
        <Input
          type="text"
          name="username"
          validators={[VALIDATOR_REQUIRE()]}
          id="username"
          value={formState.username}
          errorText="Required"
          onInput={inputHandle}
        />
        {formState.isLogin && (
          <Input
            type="password"
            name="password"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(8)]}
            id="password"
            errorText="Min 8 Characters"
            onInput={inputHandle}
          />
        )}

        <button type="submit">
          {!formState.isLogin ? 'Create' : 'Submit'}
        </button>
      </Form>
    </>
  );
};

export default FormUser;
