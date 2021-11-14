import { createSlice } from "@reduxjs/toolkit";

export const loginChecker = createSlice({
  name: "counter",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loggedIn: (state) => {
      state.isLoggedIn = true;
    },
    notLoggedIn: (state) => {
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggedIn, notLoggedIn } = loginChecker.actions;

export default loginChecker.reducer;
