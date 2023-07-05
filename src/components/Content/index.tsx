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
      <Route path="/sobre" element={<About />} />
      <Route path="/produtos/:id" element={<ProductDetail />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/depoimentos" element={<Depositions />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/obrigado" element={<Thanks />} />
      <Route path="/error" element={<Sorry />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
