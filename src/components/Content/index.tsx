import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Error from '../../pages/Error';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Thanks from '../../pages/Thanks';
import Sorry from '../../pages/Sorry';
import Depositions from '../../pages/Depositions';
import Products from '../../pages/Products';
import ProductDetail from '../../pages/ProductDetail';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/depositions" element={<Depositions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/error" element={<Sorry />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
