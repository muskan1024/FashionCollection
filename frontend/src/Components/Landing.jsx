import React,{useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Shop";
import Home from "./Home";

const Landing = () => {
  const [categ,setCateg]=useState("All")

  return (
      <Routes>
        <Route path="/" element={<Home categ={categ} setCateg={setCateg}/>}></Route>
        <Route path="/shop" element={<Shop categ={categ} setCateg={setCateg} />}></Route>
      </Routes>
  );
};

export default Landing;
