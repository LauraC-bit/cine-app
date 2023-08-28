import { createSlice } from "@reduxjs/toolkit";

export const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setTokenStore: (state, action) => {
      state.token = action.payload;
    },
    addToken: (state, action) => {
      if (
        localStorage.getItem("token") !== "" ||
        localStorage.getItem("token") !== [] ||
        action.payload === null
      ) {
        console.log(action.payload);
        state.token = action.payload;
      } else {
        state.token = action.payload;
        localStorage.setItem("token", action.payload);
        console.log(action.payload);
      }
    },
  },
});

export default tokenSlice.reducer;
export const { setTokenStore, addToken } = tokenSlice.actions;
