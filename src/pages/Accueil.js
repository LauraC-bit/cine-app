import React from "react";
import Main from "../Components/Main";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Footer from "../Components/Footer";

const Accueil = () => {
  return (
    <div>
      <ButtonMenu />
      <Title />
      <Input />
      <Main />
      <Footer />
    </div>
  );
};

export default Accueil;
