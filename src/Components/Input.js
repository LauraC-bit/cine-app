import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setInputValueStore } from "../feature/input.slice";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInputValueStore(inputValue));
  }, [inputValue]);

  return (
    <div className="display">
      <input
        className="input"
        type="text"
        placeholder="Chercher un film..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
