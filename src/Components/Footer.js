import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const user = useSelector((state) => state.token.token);

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

        <li className={user ? "displaynone" : "list-inline-item"}>
          <a href="http://localhost:3000/inscription">"Inscription"</a>
        </li>
        <li className="list-inline-item">
          <a href="http://localhost:3000/connexion">
            {user ? "Se déconnecter" : "Connexion"}
          </a>
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
