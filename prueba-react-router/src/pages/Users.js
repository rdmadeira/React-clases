import React from 'react';
import { /* Outlet, */ useLoaderData } from 'react-router-dom';
import FormUser from '../Components/formuser/FormUser.jsx';
import './users.css';

const Users = () => {
  const users = useLoaderData();

  return (
    <>
      <FormUser users={users} />
    </>
  );
};

export default Users;
