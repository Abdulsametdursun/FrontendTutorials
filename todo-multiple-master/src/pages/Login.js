import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import actionTypes from "../redux/action/actionTypes";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usersState } = useSelector((state) => state);

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = formValues.username.trim();
    const password = formValues.password.trim();

    if (!username || !password) {
      alert("Username or password can't be empty.");
      return;
    }

    const user = usersState.users.find((u) => u.username === username);
    if (!user) {
      alert("Can't find such a user.");
      return;
    }

    if (user.password !== password) {
      alert("Wrong password.");
      return;
    }

    const loginPayload = {
      isLogin: true,
      username: user.username,
      role: user.role,
    };

    dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: loginPayload });
    window.localStorage.setItem("loginState", JSON.stringify(loginPayload));
    navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            autoComplete="off"
            value={formValues.username}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="off"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
