import React from 'react';
import Button from '../../components/button/Button.jsx';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.home}>
      <p>Navegar hasta los Posts</p>
      <Link to="/posts">
        <Button inverted>Ir a Posts</Button>
      </Link>
    </div>
  );
};

export default Home;
