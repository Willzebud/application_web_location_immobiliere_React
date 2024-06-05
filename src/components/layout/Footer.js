import React from 'react';
import '../../styles/Layout/_footer.scss'; // Importer le style

const Footer = () => {
  return (
    <footer className="footer">
      <img src="/logofooter.png" alt="Kasa logo" className="footer__logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;