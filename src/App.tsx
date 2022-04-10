import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Button from './components/reusable/Button';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
