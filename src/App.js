import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoris from "./pages/Favoris";
import Accueil from "./pages/Accueil";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />}></Route>
        <Route path="/favoris" element={<Favoris />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
