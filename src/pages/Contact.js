import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Form from "../Components/ContactForm";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <ButtonMenu />
      <Title />
      <h1>Ecrivez-nous !</h1>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
