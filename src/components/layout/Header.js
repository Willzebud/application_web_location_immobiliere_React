import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.png" alt="Kasa logo" className="header__logo" />
      <nav className="header__nav">
        <a href="/" className="header__nav__link">Accueil</a>
        <a href="/about" className="header__nav__link">A Propos</a>
      </nav>
    </header>
  );
};

export default Header;
