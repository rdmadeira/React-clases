import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/header/Header.jsx';
import Home from './pages/home/Home.jsx';
import Posts from './pages/posts/Posts.jsx';

export default function App() {
  return (
    <Router>
      <div className={style.app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </Router>
  );
}
