import React from 'react';
import { useParams } from 'react-router-dom';
import Usercard from '../Components/Usercard.jsx';

function getUser(id) {
  const users = JSON.parse(localStorage.getItem('users') || []);
  let user = users.filter((item) => item.id === Number.parseInt(id));
  return user[0];
}

const User = () => {
  //let username = useLoaderData();
  let params = useParams();

  return <Usercard username={getUser(params.id).username} />;
};

export default User;
