import React from 'react';
import { Form } from 'react-router-dom';

const Users = () => {
  return (
    <>
      <h1>Ingrese nombre de usuario</h1>
      <Form>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Input your username"
        />
        <button type="submit">Enviar</button>
      </Form>
    </>
  );
};

export default Users;
