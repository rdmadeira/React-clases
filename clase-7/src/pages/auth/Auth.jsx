import React, { useState } from 'react';
import Card from '../../components/card/Card.jsx';
import Input from '../../components/input/Input.jsx';
import Button from '../../components/button/Button.jsx';

import './auth.css';

import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_MAXLENGTH,
} from '../../utils/validators';

import useForm from '../../hooks/useForm';

const Auth = () => {
  const [isLoginMode, setisLoginMode] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  console.log(formState);

  const isLoginModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          nombre: {
            value: formState.inputs.nombre?.value || '',
            isValid: formState.inputs.nombre?.isValid || '',
          },
        },
        false
      );
    }
    setisLoginMode((prevMode) => !prevMode);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <>
      <Card className="authentication">
        <h2>Login</h2>
        <form onSubmit={onSubmitHandler}>
          {!isLoginMode && (
            <Input
              element="input"
              placeholder="Nombre"
              type="text"
              id="nombre"
              label="Nombre"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Campo obligatório"
              onInput={inputHandler}
            />
          )}
          <Input
            element="input"
            placeholder="Email"
            type="email"
            id="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Ingresá un email válido"
            onInput={inputHandler}
          />
          <Input
            element="input"
            placeholder="Password"
            type="password"
            id="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_MAXLENGTH(12)]}
            errorText="Ingresá entre 6 y 12 caracteres"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLoginMode ? 'Login' : 'Sign Up'}
          </Button>
        </form>
        <Button type="submit" onClick={isLoginModeHandler} inverted>
          Switch to {isLoginMode ? 'Sign Up' : 'Login'}
        </Button>
      </Card>
    </>
  );
};

export default Auth;
