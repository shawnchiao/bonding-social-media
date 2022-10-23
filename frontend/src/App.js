import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Login from "./components/Login";
import Home from "./containers/Home";


const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
};

export default App;
