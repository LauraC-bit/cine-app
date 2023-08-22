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
      if (action.payload.length !== 0 && Array.isArray(action.payload)) {
        if (state.Movies.length !== 0) {
          let uniqueIds = state.Movies.map((movie) => movie.id);

          for (let i = 0; i < action.payload.length; i++) {
            if (uniqueIds.includes(action.payload[i].id)) {
              console.log(
                "Movie " + action.payload[i].title + "already in store" //ça ne passe pas la dedans ça continue à ajouter dans favoriesMovies et favoris l24
              );
            } else {
              state.Movies.push(action.payload[i]);
            }
          }
        } else {
          state.Movies.push(...action.payload);
        }
      } else {
        console.log("!action.payload.length !== 0");
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
