import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Button from './components/reusable/Button';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div
              style={{
                height: '200vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button />
            </div>
          }
        ></Route>
      </Routes>{' '}
    </>
  );
}

export default App;
