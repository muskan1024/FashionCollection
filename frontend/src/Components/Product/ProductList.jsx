import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:3002/api/products";
        if (category) {
          url += `?category=${category}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div className="bg-gray-200 border-[1px] border-gray-700 rounded-md  font-bold p-10 m-10 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
