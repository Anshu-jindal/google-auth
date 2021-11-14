import { configureStore } from "@reduxjs/toolkit";
import loggedInReducer from "./reducer";

export default configureStore({
  reducer: {
    counter: loggedInReducer,
  },
});
