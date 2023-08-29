import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/cinema.svg";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navigation = (props) => {
  const { openMenu } = props;
  const user = useSelector((state) => state.token.token);
  const [userConnected, setUserConnected] = useState("");
  const [userDisconnected, setUserDisconnected] = useState("");

  useEffect(() => {
    if (user === "") {
      setUserConnected("nav displayNav");
      setUserDisconnected("nav");
    } else {
      setUserConnected("nav");
      setUserDisconnected("nav displayNav");
    }
  }, [user]);
  return (
    <div className="navigation">
      <div className={openMenu ? "navigation_menu" : "displayNav"}>
        <img src={icon} alt="logo-cinema" className="icon" />
        <NavLink to="/" className="nav">
          <p>Accueil</p>
        </NavLink>
        <NavLink to="/profil" className={userConnected}>
          <p>Profil</p>
        </NavLink>
        <NavLink to="/inscription" className={userDisconnected}>
          <p>S'inscrire</p>
        </NavLink>
        <NavLink to="/favoris" className={userConnected}>
          <p>Coup de coeur</p>
        </NavLink>
        <NavLink to="/connexion" className={userDisconnected}>
          <p>Se connecter</p>
        </NavLink>
        <NavLink to="/contact" className="nav">
          <p>Ecrivez-nous!</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
