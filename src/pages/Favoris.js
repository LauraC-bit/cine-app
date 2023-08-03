import React from "react";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import Card from "../Components/Card";

const Favoris = () => {
  const moviesFavoris = useSelector(
    (state) => state.favorisMovies.favorisMovies
  );

  const moviesStore = useSelector((state) => state.movies.Movies);
  console.log(moviesStore);

  return (
    <div>
      <Navigation />
      <div className="main_flex">
        {moviesStore &&
          moviesStore.map((movie, index) => <Card key={index} movie={movie} />)}
      </div>
    </div>
  );
};

export default Favoris;
