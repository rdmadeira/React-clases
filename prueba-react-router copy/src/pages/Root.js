import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Components/Header';

export default function Root() {
  return (
    <>
      <Header />
      <div id="content">
        <Outlet />
      </div>
    </>
  );
}
