import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './index.css';
import './styles/main.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="./LOGO.png" alt="Kasa Logo" />
      </div>
      <nav className="header__nav">
        <a href="/" className="header__link">Accueil</a>
        <a href="/about" className="header__link">A Propos</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <img src="./LOGO Footer.png" alt="Kasa Logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);





