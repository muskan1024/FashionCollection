import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { category_list } from "../assets/assets";
import Login from "./Login";
import Footer from "./Footer";
import ProductCard from "./Product/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = ({ categ, setCateg }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [topProducts, setTopProducts] = useState([]);
 const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/products")
      .then((response) => {
        // Use slice method to get the top 4 products
        const top4 = response.data.slice(0, 8);
        setTopProducts(top4);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);
  const handleCategoryClick = (categoryName) => {
    if (categoryName === "All") {
      history("/shop"); // Redirect to the Shop page without specifying a category
    } else {
      history(`/shop/${categoryName}`); // Redirect to the Shop page with the selected category
    }

  };
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      {/* {showLogin?<Login setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />:<></>}
      <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> */}
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="max-w-[90%] md:max-w-[80%] mx-auto mt-20">
        <img
          src="/images/baner-1.png"
          alt="baner"
          className="rounded-lg justify-self-center w-[100%] mt-5"
        />
        <h1 className="-mb-2 mt-8 font-thin text-3xl ">
          Explore By Categories
        </h1>
        <div className="px-5 lg:px-10 flex justify-between gap-5 items-center text-center overflow-x-scroll cat-list mb-6">
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
                  className={categ === item.cat_name ? "active" : ""}
                  src={item.cat_image}
                  alt=""
                />
                <p>{item.cat_name}</p>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="mb-5 font-serif text-3xl ">Latest Collection</div>
          <div className="grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            {topProducts
              .filter(
                (product) => categ === "All" || product.category === categ
              )
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
