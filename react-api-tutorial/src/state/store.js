import { configureStore } from "@reduxjs/toolkit";
import login from "./slices/loginSlice";
import appData from "./slices/appDataSlice";

export default configureStore({
  reducer: {
    login,
    appData,
  },
});
