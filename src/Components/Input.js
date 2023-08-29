import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setInputValueStore } from "../feature/input.slice";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [userConnected, setUserConnected] = useState("");
  const [linkConnexion, setLinkConnexion] = useState("");
  const user = useSelector((state) => state.token.token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user === "") {
      setUserConnected("User disconnected");
      setLinkConnexion("http://localhost:3000/connexion");
      console.log(user);
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
      <div className="div_profil">
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
