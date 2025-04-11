import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";

export const store = configureStore({
  reducer: {
    storeCounter: counterReducer,
  },
});
