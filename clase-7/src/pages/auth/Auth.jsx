import React from 'react';
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

const Auth = () => {
  return (
    <>
      <Card className="authentication">
        <h2>Login</h2>
        <form>
          <Input
            element="input"
            placeholder="Nombre"
            type="text"
            id="nombre"
            label="Nombre"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Campo obligatório"
          />
          <Input
            element="input"
            placeholder="Email"
            type="email"
            id="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Ingresá un email válido"
          />
          <Input
            element="input"
            placeholder="Password"
            type="password"
            id="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_MAXLENGTH(12)]}
            errorText="Ingresá entre 6 y 12 caracteres"
          />
          <Button>Login</Button>
        </form>
      </Card>
    </>
  );
};

export default Auth;
