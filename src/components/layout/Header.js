import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="header">
      <img src="/logo.png" alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <Link 
          to="/" 
          className={`header__nav__link ${location.pathname === "/" ? "active" : ""}`}
        >
          Accueil
        </Link>
        <Link 
          to="/about" 
          className={`header__nav__link ${location.pathname === "/about" ? "active" : ""}`}
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
