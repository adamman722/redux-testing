import { createSlice } from "@reduxjs/toolkit";

const initalStateValue = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initalStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initalStateValue;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
