import React from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Form from "../Components/ContactForm";

const Contact = () => {
  return (
    <div>
      <ButtonMenu />
      <Title />
      <h1>Ecrivez-nous !</h1>
      <Form />
    </div>
  );
};

export default Contact;
