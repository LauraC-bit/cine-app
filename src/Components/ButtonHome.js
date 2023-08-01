import React from "react";
import { NavLink } from "react-router-dom";

const ButtonHome = () => {
  return (
    <div className="buttonHome">
      <NavLink to="/">
        <button>Retour à l'accueil</button>
      </NavLink>
    </div>
  );
};

export default ButtonHome;
