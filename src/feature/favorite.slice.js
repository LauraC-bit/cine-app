import { createSlice } from "@reduxjs/toolkit";

export const favorisSlice = createSlice({
  name: "favoriteMovies",
  initialState: {
    favorisMovies: [],
  },
  reducers: {
    setFavorisMoviesStore: (state, action) => {
      state.favorisMovies = action.payload;
    },
    addID: (state, action) => {
      state.favorisMovies.push(action.payload);
      state.favorisMovies = state.favorisMovies.filter((elements) => {
        return elements !== null;
      });
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

export default favorisSlice.reducer;
export const { setFavorisMoviesStore, addID } = favorisSlice.actions;
