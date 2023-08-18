import React, { useRef } from "react";

const ConnexionForm = () => {
  const connexion = useRef();

  const authentification = (e) => {
    e.preventDefault();
    console.log(e);
    connexion.current.reset();
  };

  return (
    <div>
      <form ref={connexion} onSubmit={authentification}>
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" />
        <label>Mot de passe</label>
        <input type="email" name="email" required autoComplete="off" />
        <input type="submit" value="Envoyer" />
      </form>
      <div className="send_situation"></div>
    </div>
  );
};

export default ConnexionForm;
