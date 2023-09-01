import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import ConnexionForm from "../Components/ConnexionForm";
import Footer from "../Components/Footer";

const Connexion = () => {
  return (
    <div>
      <ButtonMenu />
      <Title />
      <h1>Connexion</h1>
      <ConnexionForm />
      <Footer />
    </div>
  );
};

export default Connexion;
