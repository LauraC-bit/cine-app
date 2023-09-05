import React from "react";

const Footer = () => {
  return (
    <footer className="footer-basic">
      <div className="social">
        <a href="https://instagram.com">
          <i className="icon-instagram"></i>
        </a>
        <a href="https://www.snapchat.com/fr-FR">
          <i className="icon-snapchat"></i>
        </a>
        <a href="https://twitter.com/?lang=fr">
          <i className="icon-twitter"></i>
        </a>
        <a href="https://fr-fr.facebook.com/">
          <i className="icon-facebook"></i>
        </a>
      </div>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="http://localhost:3000/">Accueil</a>
        </li>
        <li className="list-inline-item">
          <a href="http://localhost:3000/inscription">Inscription</a>
        </li>
        <li className="list-inline-item">
          <a href="http://localhost:3000/connexion">Connexion</a>
        </li>
        <li className="list-inline-item">
          <a href="http://localhost:3000/contact">Ecrivez-nous!</a>
        </li>
        <li className="list-inline-item">
          <a href="http://localhost:3000/confidentialite">
            Politique de confidentialité
          </a>
        </li>
      </ul>
      <p className="copyright">Laura Comte © 2023</p>
    </footer>
  );
};

export default Footer;
