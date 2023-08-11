import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInputValueStore } from "../feature/input.slice";

const Title_input = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInputValueStore(inputValue));
  }, [inputValue]);

  return (
    <div className="title_input">
      <h1 className="title">Cine App</h1>
      <input
        className="input"
        type="text"
        placeholder="Chercher un film..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Title_input;
