import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Layout/Header'; 
import Footer from './components/Layout/Footer'; 
import AppRouter from './components/Router/AppRouter';
import './styles/main.scss'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Header />
    <AppRouter />
    <Footer />
  </Router>
);






