import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import InscriptionForm from "../Components/InscriptionForm";
import Footer from "../Components/Footer";

const Inscription = () => {
  return (
    <div>
      <ButtonMenu />
      <Title />
      <h1>Inscription</h1>
      <InscriptionForm />
      <Footer />
    </div>
  );
};

export default Inscription;
