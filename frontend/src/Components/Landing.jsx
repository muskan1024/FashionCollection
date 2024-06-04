import React,{useState} from "react";
import {  Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";

const Landing = () => {
  const [categ,setCateg]=useState("All")

  return (
      <Routes>
        <Route path="/" element={<Home categ={categ} setCateg={setCateg}/>}></Route>
        <Route path="/shop" element={<Shop categ={categ} setCateg={setCateg} />}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
  );
};

export default Landing;
