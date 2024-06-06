import React,{useState} from "react";
import {  Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";
import Cart from "./Cart";
import HomeA from "./Admin/HomeA";

const Landing = () => {
  const [categ,setCateg]=useState("All")

  return (
      <Routes>
        <Route path="/" element={<Home categ={categ} setCateg={setCateg}/>}></Route>
        <Route path="/shop" element={<Shop categ={categ} setCateg={setCateg} />}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/admin/home" element={<HomeA/>}></Route>
        
      </Routes>
  )
}
export default Landing;