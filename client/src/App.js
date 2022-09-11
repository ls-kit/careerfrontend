import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutBco from "./pages/AboutBco";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registation from "./pages/Registation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="about-BCO" element={<AboutBco />} />
        <Route path="register" element={<Registation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
