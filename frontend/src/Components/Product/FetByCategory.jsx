import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";
import Login from "../Login";
import Navbar from "../Navbar";

const FetByCategory = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [showLogin, setShowLogin] = useState(false);


  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/products?category=${category}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [category]);
  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
    <Navbar setShowLogin={setShowLogin} />
      <div>
        <div className="m-5 grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-20">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FetByCategory;
