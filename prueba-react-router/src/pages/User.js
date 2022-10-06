import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
  let username = useLoaderData();

  return <div>This is User: {username}</div>;
};

export default User;
