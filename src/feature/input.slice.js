import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "inputValue",
  initialState: {
    input: "Home",
  },
  reducers: {
    setInputValueStore: (state, action) => {
      state.input = action.payload;
    },
    // addPicture: (state, action) => {
    //   state.pictures.push(action.payload);
    // },
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

export default inputSlice.reducer;
export const { setInputValueStore } = inputSlice.actions;
