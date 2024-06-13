import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { Search } from "@mui/icons-material";
import { category_list } from "../assets/assets";
import Login from "./Login";
import Footer from "./Footer";
import ProductCard from "./Product/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Home = ({ categ, setCateg }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/products")
      .then((response) => {
        const top4 = response.data.slice(0, 8);
        setTopProducts(top4);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(true);
      });
  }, []);

  const handleCategoryClick = (categoryName) => {
    if (categoryName === "All") {
      history("/shop");
    } else {
      history(`/shop/${categoryName}`);
    }

  };

  const handleSearch = (e) => {
    // dispatch(setSearch(searchQuery.trim()));
    history(`/search-results?q=${encodeURIComponent(searchQuery.trim())}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
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
        <h1 className="-mb-2 mt-10 font-serif text-3xl ">
          Explore <span className="text-zinc-600">By</span>  Categories
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
          <div className="mb-8 font-serif text-3xl mt-10 text-slate-800 font-semibold ">Latest <span className="text-slate-600">Collection.</span></div>
          <div className="grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            {loading ? (
              <Loading />
            ) : (
              topProducts
                .filter(
                  (product) => categ === "All" || product.category === categ
                )
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            )}
          </div>
        </div>

              <div className="mt-10 ">
                <div className="  text-3xl text-cyan-900 font-mono font-bold tracking-widest">BRANDS <span className="text-cyan-700"> WE </span> <span className="text-cyan-600">CARRY.</span> </div>
                <div className="flex h-72  mt-3  justify-between gap-10  text-center overflow-x-scroll cat-list mb-6">
                <img className=" onClick={handleSearch} w-72" src="/images/RaymondLogo.jpg" alt="" />
                <img className=" onClick={handleSearch} w-72 " src="/images/siyaram.png" alt="" />
                <img className=" onClick={handleSearch} w-72 " src="/images/lenenClub.png" alt="" />
                <img className=" onClick={handleSearch} w-72 " src="/images/OCM.png" alt="" />
                <img className=" onClick={handleSearch} w-72 " src="/images/gwalior.png" alt="" />
                </div>
              </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
