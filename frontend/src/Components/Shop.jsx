import React, { useState } from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { category_list } from "../assets/assets";
import Login from "./Login";
import Footer from "./Footer";
import ProductList from "./Product/ProductList";
import { useNavigate, useParams } from "react-router-dom";

const Shop = ({ categ, setCateg }) => {
  const { category: initialCategory } = useParams();
  const [showLogin, setShowLogin] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "All");
  const history = useNavigate();

  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName);
    history(`/shop/${catName}`)
  };
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-16">
        <div className="flex justify-between gap-5 items-center text-center overflow-x-scroll cat-list mb-6">
          {category_list.map((item, index) => {
            return (
              <div
                className="cat-item-list"
                // onClick={() =>
                //   setCateg((prev) =>
                //     prev === item.cat_name ? "All" : item.cat_name
                //   )
                // }
                // onClick={() => setCateg(item.cat_name)}
                onClick={() => handleCategoryClick(item.cat_name)}
                key={index}
              >
                <img
                  className={selectedCategory === item.cat_name ? "active" : ""}
                  src={item.cat_image}
                  alt=""
                />
                <p>{item.cat_name}</p>
              </div>
            );
          })}
        </div>
        <div className="grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          <ProductList category={selectedCategory === "All" ? null : selectedCategory}/>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Shop;
