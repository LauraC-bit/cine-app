import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/cinema.svg";

const Navigation = (props) => {
  const { openMenu } = props;
  return (
    <div className="navigation">
      <div className={openMenu ? "navigation_menu" : "display"}>
        <img src={icon} alt="logo-cinema" className="icon" />
        <NavLink to="/" className="nav">
          <p>Accueil</p>
        </NavLink>
        <NavLink to="/favoris" className="nav">
          <p>Coup de coeur</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
