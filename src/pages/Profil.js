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
  const [user, setUser] = useState({
    password: "",
    pseudo: "",
    email: "",
    darkMode: false,
  });
  const [modify, setModify] = useState(false);
  const modifyForm = useRef();

  const handleDisconnect = () => {
    dispatch(deleteToken(""));
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

    axios
      .get("http://localhost:8000/user/get-user", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((user) => setUser(user.data.user))
      .catch((error) => (response = error));

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
      .delete("http://localhost:8000/user/delete", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((user) => (response = user))
      .catch((error) => (response = error));
    setTimeout(() => {
      window.location.href = "http://localhost:3000/inscription";
    }, 2000);
    localStorage.removeItem("token", response.data.token);
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
    if (isDarkModeOn === false) {
      dispatch(setDarkMode(true));

      let response = {};
      let request = {
        darkMode: true,
      };
      axios
        .patch("http://localhost:8000/user/update-user", request, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((user) => setUser(user.data.user))
        .catch((error) => (response = error));
      console.log(user); // revient ok tout l'utilisateur mais en mode FALSE alors que dans le BACK on obtient bien le TRUE
      console.log(token);
      if (user.darkMode === true) {
        dispatch(setDarkMode(true));
      }
    } else {
      dispatch(setDarkMode(false));

      let response = {};
      let request = {
        darkMode: false,
      };
      axios
        .patch("http://localhost:8000/user/update-user", request, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((user) => setUser(user.data.user))
        .catch((error) => (response = error));
      console.log(user); // revient ok tout l'utilisateur mais en mode FALSE alors que dans le BACK on obtient bien le TRUE
      console.log(token);
      if (user.darkMode === false) {
        dispatch(setDarkMode(false));
      }
    }
  };

  return (
    <div className={isDarkModeOn ? "darkMode" : ""}>
      <ButtonMenu />
      <Title />
      <div className="profilUser">
        <h1 className={isDarkModeOn ? "white_text" : ""}>Mon profil</h1>
        <div className="divDarkMode">
          <i
            className={isDarkModeOn ? "icon-darkModeOFF" : "icon-darkModeON"}
            onClick={handleDarkMode}
          ></i>
          <span className={isDarkModeOn ? "white_text" : ""}>
            Mode Sombre : {isDarkModeOn ? "ON" : "OFF"}
          </span>
        </div>
        <form className="formProfil" ref={modifyForm} onSubmit={userInfos}>
          <span>
            <span className={isDarkModeOn ? "white_text" : ""}>
              Pseudo :{" "}
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
          </span>
          <span>
            <span className={isDarkModeOn ? "white_text" : ""}>
              Adresse e-mail :{" "}
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
          </span>
          {modify === true ? (
            <span className={isDarkModeOn ? "white_text" : ""}>
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
