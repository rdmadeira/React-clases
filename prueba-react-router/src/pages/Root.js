import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../Components/Header';
import Home from './Home';
import Users from './Users';
import Contact from './Contact';
import About from './About';

import Error from './Error';

export default function Root() {
  return (
    <>
      <Router>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} index={true} />
            <Route path="/users" element={<Users />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
