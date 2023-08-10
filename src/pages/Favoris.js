import React from "react";
import Navigation from "../Components/Navigation";
import { useSelector } from "react-redux";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useState } from "react";

const Favoris = () => {
  const [result, setResult] = useState([]);
  const moviesFavoris = useSelector(
    (state) => state.favorisMovies.favorisMovies
  );

  let inputValue = useSelector((state) => state.input.input);

  const moviesStore = useSelector((state) => state.movies.Movies);

  const moviesFavorisID = moviesFavoris.map((moviesF) => moviesF);
  const moviesStoreID = moviesStore.map((movies) => movies.id);

  const match = moviesFavorisID.filter((movies) =>
    moviesStoreID.includes(movies)
  );

  useEffect(() => {
    setResult(moviesStore.filter((movies) => match.includes(movies.id)));
  }, [moviesFavoris]);

  useEffect(() => {
    setResult(moviesStore.filter((movies) => match.includes(movies.id)));
    if (inputValue !== "" && result !== undefined) {
      setResult(
        result.filter((movie) =>
          movie.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
      console.log(result);
    }
  }, [inputValue]);

  return (
    <div>
      <Navigation />
      <div className="main_flex">
        {moviesFavoris.length === 0 ? (
          <div className="emptyFavoris">
            <span>Vous n'avez pas de films ajoutés à vos Coup de coeur !</span>
          </div>
        ) : (
          result &&
          result.map((movie, index) => (
            <Card key={index} movie={movie} isFavPage={true} />
          ))
        )}
      </div>
    </div>
  );
};

export default Favoris;
