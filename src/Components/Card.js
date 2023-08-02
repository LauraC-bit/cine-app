import React, { useState } from "react";
import { GenderID } from "../data/GenderID";
import defaultPoster from "../assets/poster.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addID } from "../feature/favorite.slice";

const Card = (props) => {
  const { movie } = props;

  const dateFr = movie.release_date.split("-");
  const [active, setActive] = useState(false);
  const [favorisMovies, setFavorisMovies] = useState([]);
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
      <p>Note du film : {Math.round(movie.vote_average * 100) / 100 + "/10"}</p>
      <p>Genre: {idMovies === idGender[0] ? idGender[0].keys : idMovies}</p>
      <button
        className="card_button_style"
        onClick={() => setFavorisMovies([...favorisMovies, movie.id])}
      >
        Ajouter à mes Coups de coeur
      </button>
    </div>
  );
};

export default Card;
