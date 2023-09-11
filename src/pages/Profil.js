import React, { useEffect, useRef, useState } from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../feature/token.slice";
import Footer from "../Components/Footer";
import { setDarkMode } from "../feature/darkMode.slice";

const Profil = () => {
  const token = useSelector((state) => state.token.token);
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const [user, setUser] = useState({ password: "", pseudo: "", email: "" });
  const [modify, setModify] = useState(false);
  const [darkModeSpan, setDarkModeSpan] = useState("OFF");
  const [iconDarkMode, setIconDarkMode] = useState("icon-darkModeON");
  const modifyForm = useRef();

  const handleDisconnect = () => {
    dispatch(deleteToken("")); //WORK
    setTimeout(() => {
      window.location.href = "http://localhost:3000/connexion";
    }, 1000);
  };

  const userInfos = async (e) => {
    e.preventDefault();

    let response = {};
    let request = {
      pseudo: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };
    await axios
      .patch("http://localhost:8000/user/update-user", request, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((user) => (response = user))
      .catch((error) => (response = error));
    console.log(e);

    if (modify === true) {
      setModify(false);
    } else {
      setModify(true);
    }
  };

  const handleModify = () => {
    if (modify === true) {
      setModify(false);
    } else {
      setModify(true);
    }
  };

  const handleDelete = () => {
    let response = {};
    axios
      .delete("http://localhost:8000/user/delete", token)
      .then((user) => (response = user))
      .catch((error) => (response = error));
    console.log(response);
  };
  useEffect(() => {
    let response = {};
    axios
      .get("http://localhost:8000/user/get-user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((user) => setUser(user.data.user))
      .catch((error) => (response = error));
  }, []);

  const handleDarkMode = () => {
    setDarkModeSpan("ON");
    if (darkModeSpan === "OFF") {
      setDarkModeSpan("ON");
      setIconDarkMode("icon-darkModeOFF");
    } else {
      setDarkModeSpan("OFF");
      setIconDarkMode("icon-darkModeON");
    }

    dispatch(setDarkMode(true));
    if (isDarkModeOn === false) {
      dispatch(setDarkMode(true));
    } else {
      dispatch(setDarkMode(false));
    }
  };

  return (
    <div>
      <ButtonMenu />
      <Title />
      <div className="profilUser">
        <h1>Mon profil</h1>
        <div className="divDarkMode">
          <i className={iconDarkMode} onClick={handleDarkMode}></i>
          <span>Mode Sombre : {darkModeSpan}</span>
        </div>
        <form className="formProfil" ref={modifyForm} onSubmit={userInfos}>
          <span>
            <span>Pseudo : </span>
            {modify === true ? (
              <input
                className="inputModify"
                name="pseudo"
                placeholder={user.pseudo}
              ></input>
            ) : (
              user.pseudo
            )}
          </span>
          <span>
            <span>Adresse e-mail : </span>
            {modify === true ? (
              <input
                className="inputModify"
                name="email"
                placeholder={user.email}
              ></input>
            ) : (
              user.email
            )}
          </span>
          {modify === true ? (
            <span>
              Mot de passe :{" "}
              <input className="inputModify" name="password"></input>
            </span>
          ) : (
            <span></span>
          )}
          {modify === true ? (
            <button className="buttonValidate" type="submit">
              Valider les changements
            </button>
          ) : (
            <span></span>
          )}
        </form>
        <div className="div_button">
          <button onClick={handleModify}>Modifier mon profil</button>
          <button onClick={handleDisconnect}>Se déconnecter</button>
          <button onClick={handleDelete}>Supprimer mon compte</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profil;
