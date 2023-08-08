import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../feature/movies.slice";

const Main = () => {
  const [dataMoovies, setDataMoovies] = useState([]);
  const dispatch = useDispatch();

  let inputValue = useSelector((state) => state.input.input);

  useEffect(() => {
    if (inputValue === "") {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=d8836d766baef881268636dc25fce46c&language=fr-FR&query=home"
        )
        .then((movie) => setDataMoovies(movie.data.results));
    } else {
      axios
        .get(
          "https://api.themoviedb.org/3/search/movie?api_key=d8836d766baef881268636dc25fce46c&language=fr-FR&query=" +
            `${inputValue}`
        )
        .then((movie) => setDataMoovies(movie.data.results));
    }
  }, [inputValue]);

  useEffect(() => {
    dispatch(addMovies(dataMoovies));
  }, [dataMoovies]);

  return (
    <div className="main_flex">
      {dataMoovies &&
        dataMoovies.map((movie, index) => <Card key={index} movie={movie} />)}
    </div>
  );
};

export default Main;
