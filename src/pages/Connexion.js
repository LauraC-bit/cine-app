import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import ConnexionForm from "../Components/ConnexionForm";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const Connexion = () => {
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  const [iconDarkMode, setIconDarkMode] = useState("");

  useEffect(() => {
    if (isDarkModeOn === false) {
      setIconDarkMode("");
    } else {
      setIconDarkMode("darkMode");
    }
  }, []);
  return (
    <div className={iconDarkMode}>
      <ButtonMenu />
      <Title />
      <h1>Connexion</h1>
      <ConnexionForm />
      <Footer />
    </div>
  );
};

export default Connexion;
