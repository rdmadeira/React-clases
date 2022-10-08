import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

// La idea de los componentes es apenas renderizar, no se aplica logica, cuando posible

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.options}>
        <li className={styles.option}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.option}>
          <Link to="/posts">Posts</Link>
        </li>
        <li className={styles.option}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
