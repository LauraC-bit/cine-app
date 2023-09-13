import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setInputValueStore } from "../feature/input.slice";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [userConnected, setUserConnected] = useState("User disconnected");
  const [linkConnexion, setLinkConnexion] = useState("");
  const user = useSelector((state) => state.token.token);

  const dispatch = useDispatch();

  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  const [iconDarkMode, setIconDarkMode] = useState("div_profil");

  useEffect(() => {
    if (isDarkModeOn === false) {
      setIconDarkMode("div_profil");
    } else {
      setIconDarkMode("div_profilDarkMode");
    }
  }, []);

  useEffect(() => {
    if (user === "") {
      setUserConnected("User disconnected");
      setLinkConnexion("http://localhost:3000/connexion");
    } else {
      setUserConnected("User connected");
      setLinkConnexion("http://localhost:3000/profil");
    }
  }, [user]);

  useEffect(() => {
    dispatch(setInputValueStore(inputValue));
  }, [inputValue]);

  return (
    <div className="display">
      <div className={iconDarkMode}>
        <a href={linkConnexion}>
          <div className="profil">{userConnected}</div>
        </a>
      </div>
      <input
        className="input"
        type="text"
        placeholder="Chercher un film..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
