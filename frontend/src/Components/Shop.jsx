import React,{useState} from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { category_list } from "../assets/assets";
import Login from "./Login";
import Footer from "./Footer";


const Shop = ({ categ, setCateg }) => {

  return (
    <>

      <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-16">
        <div className="cat-list">
          {category_list.map((item, index) => {
            return (
              <div
                className="cat-item-list"
                onClick={() =>
                  setCateg((prev) =>
                    prev == item.cat_name ? "All" : item.cat_name
                  )
                }
                key={index}
              >
                <img
                  className={categ === item.cat_name ? "active" : ""}
                  src={item.cat_image}
                  alt=""
                />
                <p>{item.cat_name}</p>
              </div>
            );
          })}
        </div>
        <br />
          <br />
      
      </div>
      <Footer/>
          
    </>
  );
};

export default Shop;
