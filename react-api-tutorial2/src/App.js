import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { Home } from "./page/home";
import { Login } from "./page/login";
import { Register } from "./page/register";

function App() {
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
