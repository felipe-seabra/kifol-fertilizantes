import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import Error from '../../pages/Error';

function Content() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Content;
