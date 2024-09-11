import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <Link to="https://facebook.com" className="link"><i className="fab fa-facebook-f"></i></Link>
        <Link to="https://twitter.com" className="link"><i className="fab fa-twitter"></i></Link>
        <Link to="https://youtube.com" className="link"><i className="fab fa-youtube"></i></Link>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Recursos</h4>
          <ul>
            <li><Link to="/support-a-creator" className="link">Apoya a un creador</Link></li>
            <li><Link to="/epic-games-distribution" className="link">Distribuir en Epic Games</Link></li>
            <li><Link to="/jobs" className="link">Empleo</Link></li>
            <li><Link to="/company" className="link">Compañía</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Creado por DRINIX</h4>
          <ul>
            <li><Link to="/battle-breakers" className="link">Battle Breakers</Link></li>
            <li><Link to="/robo-recall" className="link">Robo Recall</Link></li>
            <li><Link to="/fortnite" className="link">Fortnite</Link></li>
          </ul>
        </div>
      </div>
      <div className="back-to-top">
        <Link to="#" className="link"><i className="fas fa-chevron-up"></i></Link>
      </div>
    </footer>
  );
};

export default Footer;
