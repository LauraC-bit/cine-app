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
      if (
        state.favorisMovies.includes(action.payload) ||
        action.payload === null
      ) {
        console.log("ID déjà présent ou ID null");
      } else {
        state.favorisMovies.push(action.payload);
      }
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
    deleteID: (state, action) => {
      state.favorisMovies = state.favorisMovies.filter(
        (moviesID) => moviesID !== action.payload
      );
    },
  },
});

export default favorisSlice.reducer;
export const { setFavorisMoviesStore, addID, deleteID } = favorisSlice.actions;
