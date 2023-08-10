import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/cinema.svg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInputValueStore } from "../feature/input.slice";

const Navigation = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInputValueStore(inputValue));
  }, [inputValue]);

  return (
    <div className="navigation">
      <div className="navigation_menu">
        <img src={icon} alt="logo-cinema" className="icon" />
        <NavLink to="/" className="nav">
          <p>Accueil</p>
        </NavLink>
        <NavLink to="/favoris" className="nav">
          <p>Coup de coeur</p>
        </NavLink>
      </div>
      <div className="title_input">
        <h1 className="title">Cine App</h1>
        <input
          className="input"
          type="text"
          placeholder="Chercher un film..."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Navigation;
