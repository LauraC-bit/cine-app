import React, { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=d8836d766baef881268636dc25fce46c&query=code&language=fr-FR"
  //     )
  //     .then((movie) => setDataMoovies(movie.data.results)); //a adapter, copier d'un ancien projet
  // }, [inputValue]);
  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Entrez un nom de film..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
