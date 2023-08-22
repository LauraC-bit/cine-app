import axios from "axios";
import React, { useRef } from "react";

const InscriptionForm = () => {
  const inscription = useRef();

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
      console.log("email ou password incorrect");
    } else {
      localStorage.setItem("token", response.data.token);
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
      <div className="send_situation"></div>
    </div>
  );
};

export default InscriptionForm;
