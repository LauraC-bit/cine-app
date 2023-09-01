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
  let moovieStore = useSelector((state) => state.movies.Movies);

  useEffect(() => {
    if (inputValue === "" || inputValue === undefined) {
      axios
        .get("http://localhost:8000/moovie/get-all")
        .then((movie) => setDataMoovies(movie.data.Moovies.data));
    } else {
      let mooviesFilter = moovieStore.filter((movie) =>
        movie.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setDataMoovies(mooviesFilter);
    }
  }, [inputValue]);

  useEffect(() => {
    dispatch(addMovies(dataMoovies));
  }, [dataMoovies]);

  return (
    <div className="main_flex">
      {dataMoovies &&
        Array.isArray(dataMoovies) &&
        dataMoovies.length !== 0 &&
        dataMoovies.map((movie, index) => (
          <Card key={index} movie={movie} isFavPage={false} />
        ))}
    </div>
  );
};

export default Main;
