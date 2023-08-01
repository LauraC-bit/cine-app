import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/cinema.svg";
import Input from "./Input";

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={icon} alt="logo-cinema" className="icon" />
      <NavLink to="/" className="nav">
        <p>Accueil</p>
      </NavLink>
      <NavLink to="/favoris" className="nav">
        <p>Coup de coeur</p>
      </NavLink>
      <h1 className="title">Cine App</h1>
      <Input />
    </div>
  );
};

export default Navigation;
