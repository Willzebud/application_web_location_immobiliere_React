function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="./LOGO.png" alt="Kasa Logo" />
      </div>
      <h1>TOTO</h1>
      <nav className="header__nav">
       
        <a href="/" className="header__link">Accueil</a>
        <a href="/about" className="header__link">A Propos</a>
      </nav>
    </header>
  );
}

export default Header;