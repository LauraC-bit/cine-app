import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Form from "../Components/ContactForm";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";

const Contact = () => {
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={isDarkModeOn ? "darkMode" : ""}>
      <ButtonMenu />
      <Title />
      <h1 className={isDarkModeOn ? "white_text" : ""}>Ecrivez-nous !</h1>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
