import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";

const Landing = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
  );
};

export default Landing;
