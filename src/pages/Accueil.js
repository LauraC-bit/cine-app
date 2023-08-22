import React, { useEffect, useState } from "react";
import Main from "../Components/Main";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Input from "../Components/Input";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../feature/token.slice";

const Accueil = () => {
  // const dispatch = useDispatch();
  // const [token, setToken] = useState([]);
  // let tokenStore = useSelector((state) => state.token.token[1]); // ou state.token.token?

  // if (
  //   localStorage.getItem("token") !== [] &&
  //   localStorage.getItem("token") !== tokenStore
  // ) {
  //   setToken(localStorage.getItem("token"));
  // } else {
  //   console.log("pas de token dans le localStorage");
  // }

  // useEffect(() => {
  //   dispatch(addToken(token));
  // }, [token]);
  // pour que le token si il est en local storage se mette dans le store pour que l'utilisateur des qu'il arrive sur les ite n'est aps besoin de se reconnecter et puisse faire pleins de fonctionnaltiés

  return (
    <div>
      <ButtonMenu />
      <Title />
      <Input />
      <Main />
    </div>
  );
};

export default Accueil;
