import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "Movies",
  initialState: {
    Movies: [],
  },
  reducers: {
    setMoviesStore: (state, action) => {
      state.Movies = action.payload;
    },
    addMovies: (state, action) => {
      state.Movies.push(...action.payload);
    },
    // editPicture: (state, action) => {
    //   state.pictures = state.pictures.map((pic) => {
    //     if (pic.id === action.payload[1]) {
    //       return {
    //         ...pic,
    //         artist: action.payload[0],
    //       };
    //     } else {
    //       return pic;
    //     }
    //   });
    // },
    // deletePicture: (state, action) => {
    //   state.pictures = state.pictures.filter(
    //     (pic) => pic.id !== action.payload
    //   );
    // },
  },
});

export default moviesSlice.reducer;
export const { setMoviesStore, addMovies } = moviesSlice.actions;
