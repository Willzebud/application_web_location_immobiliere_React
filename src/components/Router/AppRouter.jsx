import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
//import About from '.pages/About';
//import NotFound from './pages/NotFound';

function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
  );
}

export default AppRouter;

