import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AboutBco from "./pages/AboutBco";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Registation from "./pages/Registation";
import CentralComitee from "./pages/CentralComitee";
import Organizer from "./pages/Organizer";
import NewsMedia from "./pages/NewsMedia";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="central-comitee" element={<CentralComitee />} />
        <Route path="login" element={<Login />} />
        <Route path="about-BCO" element={<AboutBco />} />
        <Route path="organizer" element={<Organizer />} />
        <Route path="news-media" element={<NewsMedia />} />
        <Route path="register" element={<Registation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
