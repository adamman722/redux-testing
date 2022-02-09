import { createSlice } from "@reduxjs/toolkit";

const initalStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initalStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
