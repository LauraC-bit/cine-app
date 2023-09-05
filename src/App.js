import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoris from "./pages/Favoris";
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";
import Connexion from "./pages/Connexion";
import Contact from "./pages/Contact";
import Inscription from "./pages/Inscription";
import Profil from "./pages/Profil";
import Confidentialite from "./pages/Confidentialite";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/favoris" element={<Favoris />}></Route>
        <Route path="/connexion" element={<Connexion />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/inscription" element={<Inscription />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/confidentialite" element={<Confidentialite />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
