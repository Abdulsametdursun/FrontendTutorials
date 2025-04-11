// node_modules imports
import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// custom components
import { Home } from "./page/home";
import { Login } from "./page/login";
import { Register } from "./page/register";
import { useSelector } from "react-redux";
import { login } from "./state/slices/loginSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const stateAppDataInitialized = useSelector(
    (state) => state.appData.initialized
  );
  const stateToken = useSelector((state) => state.login.token);
  const localStorageToken = localStorage.getItem("token");

  console.log(">> APP STATE TOKEN", stateToken, localStorageToken);
  console.log(">> APPDATA INITIALIZED", stateAppDataInitialized);

  if (stateToken === null && localStorageToken !== null) {
    const payload = {
      token: localStorageToken,
    };
    dispatch(login(payload));

    console.log(">> STATE TOKEN SETTING");
  }

  if (stateToken !== null && stateAppDataInitialized === false) {
    return (
      <div>
        <h4 className="text-center">Loading...</h4>
      </div>
    );
  }

  console.log(">> APP READY");

  //if (token) {
  //  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
  //}

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
