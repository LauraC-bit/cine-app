import React, { useEffect, useState } from "react";
import Main from "../Components/Main";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const Accueil = () => {
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
      <Input />
      <Main />
      <Footer />
    </div>
  );
};

export default Accueil;
