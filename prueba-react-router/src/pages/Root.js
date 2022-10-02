import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Components/Header';
import Home from './Home';
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
            <Route exact path="/" element={<Home />} index={true} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="*" element={<Error />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
