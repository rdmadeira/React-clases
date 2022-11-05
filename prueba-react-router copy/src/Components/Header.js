import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
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
