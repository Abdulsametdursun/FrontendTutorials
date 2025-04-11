import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./loginSlice";

const initialState = {
  initialized: false,

  firstName: null,
  lastName: null,
  role: null,
};

export const appDataSlice = createSlice({
  name: "appDataSlice",
  initialState,
  reducers: {
    updateAppData: async (state) => {
      const store = require("../store").default;

      console.log(">> UPDATE APP DATA REDUCER EXECUTING");

      await axios
        .get("https://api.adoptez1artisan.com/user/appData")
        .then((response) => {
          console.log("success", response);

          if (response.data.status === "success") {
            console.log(">> USER", response.data.data.user);

            state.firstName = response.data.data.user.firstName.toString();
            state.lastName = response.data.data.user.lastName.toString();
            state.role = response.data.data.user.role;

            state.initialized = true;

            document.location.href = "#/";
          } else {
            alert("There is an error");
          }
        })
        .catch((err) => {
          console.log("err", err);

          if (err.response.data.exceptionType === "UserNotLoggedInException") {
            store.dispatch(logout());
            return;
          }

          alert(err.response.data.exceptionType);
        });
    },
  },
});

export const { updateAppData } = appDataSlice.actions;
export default appDataSlice.reducer;
