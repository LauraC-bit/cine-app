import React, { useState } from "react";
import { GenderID } from "../data/GenderID";
import defaultPoster from "../assets/poster.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addID, deleteID } from "../feature/favorite.slice";

const Card = (props) => {
  const { movie, isFavPage } = props;
  const [isClass, setClass] = useState(false);
  const [buttonValue, setButtonValue] = useState(
    "Ajouter à mes Coups de coeur"
  );

  const dateFr = movie.release_date.split("-");
  const [active, setActive] = useState(false);
  const [favorisMovies, setFavorisMovies] = useState([]);
  const [deleteFavorisMovies, setdeleteFavorisMovies] = useState([]);
  const idMovies = movie.genre_ids.map((idM) => idM);
  const idGender = Object.entries(GenderID).map((idG) => idG[1]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favorisMovies !== null) {
      dispatch(addID(...favorisMovies));
    }
  }, [favorisMovies]);

  // console.log(idGender[0]); => work

  // if (idGender.includes(idMovies)) {
  //   console.log(idGender.props);
  //   return idGender;
  // }
  // const dataGender = Object.entries(GenderID)
  //   .filter(([key, val]) => val.includes(movie.genre_ids))
  //   .map((IDM) => IDM);

  const handleClick = (movie) => {
    if (isClass === false && buttonValue === "Ajouter à mes Coups de coeur") {
      setClass(true);
      setButtonValue("Ajout effectué !");
      setFavorisMovies([...favorisMovies, movie]);
    } else {
      setClass(false);
      setButtonValue("Ajouter à mes Coups de coeur");
      //retirer le movie.id de FavorisMovies
      setFavorisMovies(favorisMovies.filter((item) => item.value !== movie)); //euh... l'id se rajoute de la même maniere que tous les films se rajoutent en double dans favorisMovies
      //autre solution : const handleRemoveItem = movie => { (appeler la fonction en transmettant en parametre movie.id)
      //favorisMovies.splice(favorisMovies.indexOf(movie)-1, 1)
      //setFavorisMovies(favorisMovies); <- c'est correct ça?
      //}
    }
  };

  useEffect(() => {
    dispatch(deleteID(...deleteFavorisMovies));
  }, [deleteFavorisMovies]);

  const deleteFavorite = (movie) => {
    setdeleteFavorisMovies([...deleteFavorisMovies, movie]);
  };

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };

  return (
    <div
      className="card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={active ? "visible" : "hidden"}>
        <h4>Resume : </h4> <p>{movie.overview}</p>
      </div>
      <h1>{movie.title}</h1>
      <img
        src={
          "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            ? "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
            : { defaultPoster }
        }
        alt={"affiche de " + movie.title}
      />
      <p>Date de sortie : {dateFr[2] + "/" + dateFr[1] + "/" + dateFr[0]}</p>
      <p>Note du film : {Math.round(movie.vote_average * 10) / 10 + "/10"}</p>
      <p>Genre: {idMovies === idGender[0] ? idGender[0].keys : idMovies}</p>
      {isFavPage ? (
        <button
          className="card_button_style outFav"
          onClick={() => deleteFavorite(movie.id)}
        >
          Retirer des Coups de coeur
        </button>
      ) : (
        <button
          className={isClass ? "card_button_style fav" : "card_button_style"}
          onClick={() => handleClick(movie.id)}
        >
          {buttonValue}
        </button>
      )}
    </div>
  );
};

export default Card;
