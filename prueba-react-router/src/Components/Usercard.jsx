import React from 'react';
import './usercard.css';
const Usercard = (props) => {
  return (
    <div id="user-div">
      <h3>Current User</h3>
      <p>{props.username}</p>
    </div>
  );
};

export default Usercard;
