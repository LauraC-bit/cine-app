import axios from "axios";
import React, { useRef, useState } from "react";

const InscriptionForm = () => {
  const inscription = useRef();
  const [resultConnexion, setResultConnexion] = useState(100);
  const [spanConnexion, setSpanConnexion] = useState("");
  const [errorPseudo, setErrorPseudo] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [password, setPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [spanStyle, setSpanStyle] = useState("");
  const [hidden, setHidden] = useState("password");

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

  const pseudoChecker = (e) => {
    let value = e.target.value;
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
      setErrorPseudo("Le pseudo doit faire entre 0 et 20 caractères.");
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      setErrorPseudo("Le pseudo ne doit pas contenir de caractères spéciaux.");
    } else {
      setErrorPseudo("");
    }
  };

  const emailChecker = (e) => {
    let value = e.target.value;
    if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      setErrorEmail("Le mail n'est pas valide");
    } else {
      setErrorEmail("");
    }
  };

  const passwordChecker = (e) => {
    let value = e.target.value;
    if (
      !value.match(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
    ) {
      setErrorPassword(
        "Minimum de 8 caractères, une majuscule, un chiffre, et un caractère spécial."
      );
      setSpanStyle("spanError");
    } else {
      setPassword(value);
      setErrorPassword("Mot de passe valide!");
      setSpanStyle("spanConfirm");
    }
  };

  const confirmChecker = (e) => {
    let value = e.target.value;
    if (value !== password) {
      setErrorConfirmPassword("Les mots de passe ne correspondent pas");
      setSpanStyle("spanError");
    } else if (value === password) {
      setErrorConfirmPassword("Les mots de passe sont identiques");
      setSpanStyle("spanConfirm");
    }
  };

  const showPassword = () => {
    if (hidden === "text") {
      setHidden("password");
    } else {
      setHidden("text");
    }
  };

  return (
    <div className="displayflex">
      <form ref={inscription} onSubmit={registration}>
        <label className="labelForm">Pseudo</label>
        <input
          className="inputForm"
          type="text"
          name="pseudo"
          required
          autoComplete="off"
          onChange={pseudoChecker}
        />
        <span className="spanError">{errorPseudo}</span>
        <label className="labelForm">Email</label>
        <input
          className="inputForm"
          type="email"
          name="email"
          required
          autoComplete="off"
          onChange={emailChecker}
        />
        <span className="spanError">{errorEmail}</span>
        <label className="labelForm">Mot de passe</label>
        <div className="flexinput">
          <input
            className="inputForm"
            type={hidden}
            name="password"
            required
            autoComplete="off"
            onChange={passwordChecker}
          />
          <i className="hidden_password" onClick={showPassword}></i>
        </div>
        <span className={spanStyle}>{errorPassword}</span>
        <label className="labelForm">Confirmer mot de passe</label>
        <div className="flexinput">
          <input
            className="inputForm"
            type={hidden}
            name="password"
            required
            autoComplete="off"
            onChange={confirmChecker}
          />
          <i className="hidden_password" onClick={showPassword}></i>
        </div>
        <span className={spanStyle}>{errorConfirmPassword}</span>
        <div className="policy">
          <input
            type="checkbox"
            value="privacy-policy"
            required
            autoComplete="off"
          />
          <span>
            <a target="blank" href="http://localhost:3000/confidentialite">
              Je comprends et accepte la politique de confidentialité.
            </a>
          </span>
        </div>
        <button className="button_Form" type="submit">
          Envoyer
        </button>
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
