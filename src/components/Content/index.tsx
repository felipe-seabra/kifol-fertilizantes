import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '../../pages/Error';
import Home from '../../pages/Home';
import About from '../../pages/About';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
