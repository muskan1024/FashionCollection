import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Login from "../Login";
import Navbar from "../Navbar";
import Loading from "../Loading";

const SearchResult = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("q");
    setSearchQuery(query);
    fetchSearchResults(query);
  }, [location]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(
        `https://fashion-collection-backend-rosy.vercel.app/api/products/search?q=${query}`
      );
      console.log("Response:", response.data);
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setLoading(true);
    }
  };
  return (
    <>
      <div>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
        <Navbar setShowLogin={setShowLogin} />
        <div className="mt-20 ml-5">
          <h1>Search Results for "{searchQuery}"</h1>
          <div className="grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 m-5 ">
            {loading ? (
              <Loading />
            ) : (
              searchResults.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
