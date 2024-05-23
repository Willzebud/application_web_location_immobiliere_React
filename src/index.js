import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRouter from './components/Router/AppRouter'
import './css/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Router>
    <Header />
    <AppRouter/>
    <Footer/>
    </Router>
  </>
)





