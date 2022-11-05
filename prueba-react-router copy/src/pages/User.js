import React from 'react';
import { useParams } from 'react-router-dom';
import Usercard from '../Components/Usercard.jsx';
import { getUser } from '../utils/utils.js';

const User = () => {
  //let username = useLoaderData();
  let params = useParams();

  return <Usercard username={getUser(params.id).username} />;
};

export default User;
