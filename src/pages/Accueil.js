import React from "react";
import Main from "../Components/Main";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Input from "../Components/Input";

const Accueil = () => {
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
