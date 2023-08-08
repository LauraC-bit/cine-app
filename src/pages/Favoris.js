import React from "react";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const Favoris = () => {
  const [result, setResult] = useState();
  const moviesFavoris = useSelector(
    (state) => state.favorisMovies.favorisMovies
  );

  const moviesStore = useSelector((state) => state.movies.Movies);

  const moviesFavorisID = moviesFavoris.map((moviesF) => moviesF);
  const moviesStoreID = moviesStore.map((movies) => movies.id);

  const match = moviesFavorisID.filter((movies) =>
    moviesStoreID.includes(movies)
  );

  console.log(match);

  useEffect(() => {
    setResult(moviesStore.filter((movies) => match.includes(movies.id)));
  }, []);

  return (
    <div>
      <Navigation />
      <div className="main_flex">
        {result &&
          result.map((movie, index) => <Card key={index} movie={movie} />)}
      </div>
    </div>
  );
};

export default Favoris;
