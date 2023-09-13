import React from "react";
import ButtonHome from "../Components/ButtonHome";
import { useSelector } from "react-redux";

const Error = () => {
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={isDarkModeOn ? "error darkMode" : "error"}>
      <h1 className={isDarkModeOn ? "white_text" : ""}>Error 404</h1>
      <ButtonHome />
    </div>
  );
};

export default Error;
