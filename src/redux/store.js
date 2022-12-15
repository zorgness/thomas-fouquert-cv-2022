import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./reducer/darkModeReducer";

export const store = configureStore({
  reducer: {
    mode: darkModeReducer,
  },
});
