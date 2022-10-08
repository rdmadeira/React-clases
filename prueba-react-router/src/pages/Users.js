import React from 'react';
import { Form, Outlet } from 'react-router-dom';

const Users = () => {
  //const users = useLoaderData();

  return (
    <>
      <Form method="post" id="form-username">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Input your username"
        />
        <button type="submit">Enviar</button>
      </Form>
      <Outlet />
    </>
  );
};

export default Users;
