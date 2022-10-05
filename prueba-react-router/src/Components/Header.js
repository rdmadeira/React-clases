import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.css';

const Header = () => {
  const { search } = useLocation();

  //let query = new URLSearchParams(location);
  //query.set('name', 'rodrigo');

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
          end>
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/users">
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/contact">
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
