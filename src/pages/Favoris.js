import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useState } from "react";
import ButtonMenu from "../Components/ButtonMenu";
import Title from "../Components/Title";
import Input from "../Components/Input";
import Footer from "../Components/Footer";
import axios from "axios";
import { setFavorisMoviesStore } from "../feature/favorite.slice";

const Favoris = () => {
  const [result, setResult] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  let token = useSelector((state) => state.token.token);
  let inputValue = useSelector((state) => state.input.input);
  const isDarkModeOn = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8000/user/user-movies", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      })
      .then((user) => {
        setAllMovies(user.data.user.FavorisMoviesAdd);
        setResult(user.data.user.FavorisMoviesAdd);
        dispatch(
          setFavorisMoviesStore(
            user.data.user.FavorisMoviesAdd.map((movie) => movie._id)
          )
        );
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setResult(allMovies);
    if (inputValue !== "" && result !== undefined) {
      setResult(
        allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    }
  }, [inputValue]);

  return (
    <div className={isDarkModeOn ? "darkMode" : ""}>
      <ButtonMenu />
      <Title />
      <Input />
      <div className="main_flex">
        {result.length === 0 ? (
          <div className="emptyFavoris">
            <span className={isDarkModeOn ? "white_text" : ""}>
              Vous n'avez pas de films ajoutés à vos Coup de coeur !
            </span>
          </div>
        ) : (
          result &&
          result.map((movie, index) => (
            <Card key={index} movie={movie} isFavPage={true} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Favoris;
