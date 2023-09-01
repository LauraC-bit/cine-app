import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addID, deleteID } from "../feature/favorite.slice";
import { setDelete } from "../feature/delete.slice";
import axios from "axios";

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
  const dispatch = useDispatch();

  let token = useSelector((state) => state.token.token);
  let deleteFav = useSelector((state) => state.delete.delete);

  useEffect(() => {
    if (favorisMovies.length !== 0) {
      dispatch(addID(...favorisMovies));

      let response = {};
      let request = {
        favorisMovies: favorisMovies,
        deleteFromFav: false,
      };
      axios
        .patch("http://localhost:8000/user/update-favmovies", request, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((user) => (response = user))
        .catch((error) => (response = error));
      console.log(response);
      console.log(token);

      if (response.response) {
        console.log("problème pour envoyer les favoris");
      } else {
        console.log("ça fonctionne");
      }
    }
  }, [favorisMovies]);

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push("Aventure");
          break;
        case 16:
          genreArray.push("Animation");
          break;
        case 38:
          genreArray.push("Comédie");
          break;
        case 80:
          genreArray.push("Policier");
          break;
        case 99:
          genreArray.push("Documentaire");
          break;
        case 18:
          genreArray.push("Drame");
          break;
        case 10751:
          genreArray.push("Famille");
          break;
        case 14:
          genreArray.push("Fantasy");
          break;
        case 36:
          genreArray.push("Histoire");
          break;
        case 27:
          genreArray.push("Horreur");
          break;
        case 10402:
          genreArray.push("Musique");
          break;
        case 9648:
          genreArray.push("Mystère");
          break;
        case 10749:
          genreArray.push("Romance");
          break;
        case 878:
          genreArray.push("Science-Fiction");
          break;
        case 10770:
          genreArray.push("Téléfilm");
          break;
        case 53:
          genreArray.push("Thriller");
          break;
        case 10752:
          genreArray.push("Guerre");
          break;
        case 37:
          genreArray.push("Western");
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => (
      <li key={genre} className="card_ul_li">
        {genre}
      </li>
    ));
  };

  const handleClick = (movie) => {
    if (isClass === false && buttonValue === "Ajouter à mes Coups de coeur") {
      setClass(true);
      setButtonValue("Ajout effectué !");
      setFavorisMovies([...favorisMovies, movie]);
    } else {
      setClass(false);
      setButtonValue("Ajouter à mes Coups de coeur");
      setFavorisMovies(favorisMovies.filter((item) => item.value !== movie));
    }
  };

  useEffect(() => {
    if (deleteFavorisMovies.length !== 0) {
      console.log(deleteFavorisMovies);
      let response = {};
      let request = {
        favorisMovies: deleteFavorisMovies,
        deleteFromFav: true,
      };
      axios
        .patch("http://localhost:8000/user/update-favmovies", request, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((user) => (response = user))
        .catch((error) => (response = error));
      console.log(response);
      console.log(token);

      if (response.response) {
        console.log("problème pour supprimer le film des favoris");
      } else {
        console.log("ça fonctionne");
      }

      dispatch(deleteID(...deleteFavorisMovies));
    }
  }, [deleteFavorisMovies]);

  const deleteFavorite = (movie) => {
    setdeleteFavorisMovies([movie]);
    if (deleteFav === false) {
      dispatch(setDelete(true));
    } else {
      dispatch(setDelete(false));
    }
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
        <h4>Resume : </h4> <p>{movie.overview ? movie.overview : "Inconnu"}</p>
      </div>
      <h1>{movie.title}</h1>
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./assets/poster.jpg"
        }
        alt={"affiche de " + movie.title}
      />
      <p>
        Date de sortie :{" "}
        {movie.release_date
          ? dateFr[2] + "/" + dateFr[1] + "/" + dateFr[0]
          : "Inconnue"}
      </p>
      <p>
        <span> &#11088; </span>
        {Math.round(movie.vote_average * 10) / 10 + "/10"}
      </p>
      <ul className="card_ul">{movie.genre_ids ? genreFinder() : null}</ul>
      {isFavPage ? (
        <button
          className="card_button_style outFav"
          onClick={() => deleteFavorite(movie._id)}
        >
          Retirer des Coups de coeur
        </button>
      ) : (
        <button
          className={isClass ? "card_button_style fav" : "card_button_style"}
          onClick={() => handleClick(movie._id)}
        >
          {buttonValue}
        </button>
      )}
    </div>
  );
};

export default Card;
