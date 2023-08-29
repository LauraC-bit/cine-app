import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../feature/token.slice";

const Profil = () => {
  const token = useSelector((state) => state.token.token);
  const dispatch = useDispatch();

  const handleDisconnect = () => {
    dispatch(deleteToken("")); //WORK
    setTimeout(() => {
      window.location.href = "http://localhost:3000/connexion";
    }, 1000);
  };

  const handleModify = () => {
    let response = {};
    axios
      .patch("http://localhost:8000/user/update-pseudo", token) //attends token + pseudo, value de l'input
      .then((user) => (response = user))
      .catch((error) => (response = error));
    console.log(response);
  };

  const handleDelete = () => {
    let response = {};
    axios
      .delete("http://localhost:8000/user/delete", token)
      .then((user) => (response = user))
      .catch((error) => (response = error));
    console.log(response);
  };

  let response = {};
  axios
    .get("http://localhost:8000/user/get-user", token)
    .then((user) => (response = user))
    .catch((error) => (response = error));
  console.log(response);

  return (
    <div>
      <ButtonMenu />
      <Title />
      <div className="profilUser">
        <h1>Profil</h1>
        <span>Nom d'utilisateur : </span>
        <span>Adresse e-mail :</span>
        <span>Mot de passe :</span>
        <div className="div_button">
          <button onClick={handleModify}>Modifier</button>
          <button onClick={handleDisconnect}>Se déconnecter</button>
          <button onClick={handleDelete}>Supprimer mon compte</button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
