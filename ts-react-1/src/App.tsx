import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import UserList from "./pages/user-list";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
