import axios from "axios";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToken } from "../feature/token.slice";

const ConnexionForm = () => {
  const connexion = useRef();
  const [resultConnexion, setResultConnexion] = useState(100);
  const [spanConnexion, setSpanConnexion] = useState("");
  const [connexionSuccess, setConnexionSuccess] = useState("");
  const dispatch = useDispatch();

  const authentification = async (e) => {
    e.preventDefault();

    let data = { email: e.target[0].value, password: e.target[1].value };
    console.log(data);

    let response = {};
    await axios
      .post("http://localhost:8000/user/login", data)
      .then((user) => (response = user))
      .catch((error) => (response = error));
    console.log(response);

    if (response.response) {
      setSpanConnexion("Email ou mot de passe incorrect");
      setResultConnexion(response.status);
    } else {
      setConnexionSuccess(response.data.token);
      localStorage.setItem("token", response.data.token);
      setSpanConnexion("Connexion réussie, redirection en cours...");
      setResultConnexion(response.status);
      setTimeout(() => {
        window.location.href = "http://localhost:3000/profil";
      }, 2000);
    }

    connexion.current.reset();
  };

  useEffect(() => {
    dispatch(addToken(connexionSuccess));
  }, [connexionSuccess]);

  return (
    <div className="displayflex">
      <form ref={connexion} onSubmit={authentification}>
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Mot de passe</label>
        <input type="text" name="password" required autoComplete="off" />
        <button type="submit">Envoyer</button>
      </form>
      <div
        className={
          resultConnexion === 200
            ? "connexion_successful animate"
            : "connexion_unsuccessful animate"
        }
      >
        <span className="span">{spanConnexion}</span>
      </div>
    </div>
  );
};

export default ConnexionForm;
