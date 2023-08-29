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
      setSpanConnexion("email ou password incorrect");
      setResultConnexion(response.status);
    } else {
      localStorage.setItem("token", response.data.token);
      setSpanConnexion("connexion réussie");
      setResultConnexion(response.status);
    }

    inscription.current.reset();
  };

  return (
    <div>
      <form ref={inscription} onSubmit={registration}>
        <label>Pseudo</label>
        <input type="text" name="pseudo" required autoComplete="off" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Mot de passe</label>
        <input type="text" name="password" required autoComplete="off" />
        <input type="submit" value="Envoyer" />
      </form>
      <div
        className={resultConnexion === 200 ? "send_situation" : "displaynone"}
      >
        <span className="span">{spanConnexion}</span>
      </div>
    </div>
  );
};

export default InscriptionForm;
