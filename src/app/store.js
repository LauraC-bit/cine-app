import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "../feature/input.slice";
import favorisSlice from "../feature/favorite.slice";
import moviesSlice from "../feature/movies.slice";
import tokenSlice from "../feature/token.slice";
import deleteSlice from "../feature/delete.slice";

export default configureStore({
  reducer: {
    input: inputSlice,
    favorisMovies: favorisSlice,
    movies: moviesSlice,
    token: tokenSlice,
    delete: deleteSlice,
  },
});
