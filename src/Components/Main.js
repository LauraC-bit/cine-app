import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Main = () => {
  const [dataMoovies, setDataMoovies] = useState([]);
  console.log(dataMoovies);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=d8836d766baef881268636dc25fce46c&query=code&language=fr-FR"
      )
      .then((movie) => setDataMoovies(movie.data.results));
  }, []);

  return (
    <div className="main_flex">
      {dataMoovies &&
        dataMoovies.map((movie, index) => <Card key={index} movie={movie} />)}
    </div>
  );
};

export default Main;
