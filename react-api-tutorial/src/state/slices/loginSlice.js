import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { updateAppData } from "./appDataSlice";

const initialState = {
  token: null,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      //console.log('>> ARGS', this)

      const store = require("../store").default;
      console.log(">> STORE", store);

      console.log(">> LOGIN ACTION", action);

      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;

      axios.defaults.headers.common["Authorization"] =
        "Bearer " + action.payload.token;

      console.log(">> LOGIN OPERATION SUCCESS");

      setTimeout(() => store.dispatch(updateAppData()), 1);
      console.log(">> update app data will be called.");
    },

    logout: (state) => {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      state.token = null;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
