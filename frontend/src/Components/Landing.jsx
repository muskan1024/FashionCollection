import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import HomeA from "./Admin/HomeA";
import LoginA from "./Admin/LoginA";
import { UserProvider } from "./UserContext";

const Landing = () => {
  const [categ, setCateg] = useState("All");

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route
            path="/home"
            element={<Home categ={categ} setCateg={setCateg} />}
          ></Route>
          <Route
            path="/shop"
            element={<Shop categ={categ} setCateg={setCateg} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route
            path="/"
            element={<Home categ={categ} setCateg={setCateg} />}
          ></Route>
          <Route
            path="/shop"
            element={<Shop categ={categ} setCateg={setCateg} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin/login" element={<LoginA />}></Route>
          <Route path="/admin/home" element={<HomeA />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};
export default Landing;
