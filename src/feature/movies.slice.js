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
      console.log(action);
      if (action.payload.length == 0) {
        let uniqueIds = state.Movies.map((movie) => movie.id);

        for (let i = 0; i <= action.payload.length; i++) {
          if (uniqueIds.includes(action.payload[i].id)) {
            console.log(
              "Movie " + action.payload[i].title + "already in store"
            );
          } else {
            state.Movies.push(action.payload[i]);
          }
        }
      }

      // if () {

      // }
      // state.Movies.push(...action.payload);
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
