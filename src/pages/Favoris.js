import React from "react";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import Card from "../Components/Card";

const Favoris = () => {
  const moviesFavoris = useSelector(
    (state) => state.favorisMovies.favorisMovies
  );

  const moviesStore = useSelector((state) => state.movies.Movies);

  return (
    <div>
      <Navigation />
      {moviesStore && moviesStore.map((movie, index) => <Card key={index} />)}
    </div>
  );
};

export default Favoris;
