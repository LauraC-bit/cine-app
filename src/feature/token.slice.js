import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: localStorage.getItem("token"),
  },
  reducers: {
    addToken: (state, action) => {
      if (
        localStorage.getItem("token") !== "" &&
        localStorage.getItem("token") !== [] &&
        action.payload === null
      ) {
        state.token = localStorage.getItem("token");
      } else {
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
      }
    },
    deleteToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default tokenSlice.reducer;
export const { addToken, deleteToken } = tokenSlice.actions;
