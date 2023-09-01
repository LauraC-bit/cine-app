import { createSlice } from "@reduxjs/toolkit";

export const deleteSlice = createSlice({
  name: "delete",
  initialState: {
    delete: false,
  },
  reducers: {
    setDelete: (state, action) => {
      state.delete = action.payload;
    },
  },
});

export default deleteSlice.reducer;
export const { setDelete } = deleteSlice.actions;
