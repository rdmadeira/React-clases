import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  let { username } = useParams();

  return (
    <div id="user-div">
      <h3>Current User:</h3>
      <p>{username}</p>
    </div>
  );
};

export default User;
