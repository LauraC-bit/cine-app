import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

const Form = () => {
  const form = useRef();
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_3mshvoj",
        "template_87lb6x5",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = "<p class='sucess'> Message envoyé!</p>";

          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "<p class='error_contactForm'>Une erreur s'est produite, veuillez réessayer.</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 3000);
        }
      );
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label className={isDarkModeOn ? "white_text" : ""}>Nom</label>
        <input
          className="inputForm"
          type="text"
          name="name"
          required
          autoComplete="off"
        />
        <label className={isDarkModeOn ? "white_text" : ""}>Email</label>
        <input
          className="inputForm"
          type="email"
          name="email"
          required
          autoComplete="off"
        />
        <label className={isDarkModeOn ? "white_text" : ""}>Message</label>
        <textarea name="message" required />
        <button className="button_Form" type="submit">
          Envoyer
        </button>
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default Form;
