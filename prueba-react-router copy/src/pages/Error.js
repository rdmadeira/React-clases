import React from 'react';
import { useRouteError } from 'react-router-dom';
import './error.css';

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return <div id="error-div">404 - Not Found</div>;
};

export default Error;
