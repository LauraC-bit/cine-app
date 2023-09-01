import axios from "axios";
import React, { useRef, useState } from "react";

const InscriptionForm = () => {
  const inscription = useRef();
  const [resultConnexion, setResultConnexion] = useState(100);
  const [spanConnexion, setSpanConnexion] = useState("");

  const registration = async (e) => {
    e.preventDefault();

    let data = {
      pseudo: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    console.log(data);

    let response = {};
    await axios
      .post("http://localhost:8000/user/sign-up", data)
      .then((user) => (response = user))
      .catch((error) => (response = error));
    console.log(response);

    if (response.response) {
      setSpanConnexion("Un utilisateur avec cet e-mail existe déjà");
      setResultConnexion(response.response.status);
      console.log(response.response.status);
    } else {
      localStorage.setItem("token", response.data.token);
      setSpanConnexion("Inscription réussie, redirection en cours...");
      setResultConnexion(response.status);
      setTimeout(() => {
        window.location.href = "http://localhost:3000/favoris";
      }, 2000);
    }

    inscription.current.reset();
  };

  return (
    <div className="displayflex">
      <form ref={inscription} onSubmit={registration}>
        <label>Pseudo</label>
        <input type="text" name="pseudo" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Mot de passe</label>
        <input type="text" name="password" required autoComplete="off" />
        <button type="submit">Envoyer</button>
      </form>
      <div className="div_inscription">
        <span
          className={
            resultConnexion && resultConnexion === 200
              ? "inscription_success"
              : resultConnexion && resultConnexion === 400
              ? "inscription_unsuccess"
              : "no_class"
          }
        >
          {spanConnexion}
        </span>
      </div>
    </div>
  );
};

export default InscriptionForm;
