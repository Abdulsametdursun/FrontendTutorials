import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import actionTypes from "./redux/action/actionTypes";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const dispatch = useDispatch();
  const [isDataRead, setIsDataRead] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      const loginState = window.localStorage.getItem("loginState");
      if (loginState === null) {
        const defaultState = {
          isLogin: false,
          username: "",
          role: "",
        };
        window.localStorage.setItem("loginState", JSON.stringify(defaultState));
      } else {
        const fromStorage = JSON.parse(loginState);
        dispatch({ type: actionTypes.USER_INFO_CHECK, payload: fromStorage });
      }

      dispatch({ type: actionTypes.FETCH_USERS_START });
      try {
        const res = await axios.get("http://localhost:3004/users");
        dispatch({ type: actionTypes.FETCH_USERS_SUCCESS, payload: res.data });
      } catch (err) {
        console.error("get users err", err);
        dispatch({
          type: actionTypes.FETCH_USERS_FAIL,
          payload: "Get users failed",
        });
      }

      setIsDataRead(true);
    };

    initApp();
  }, []);

  if (!isDataRead) return null;

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
