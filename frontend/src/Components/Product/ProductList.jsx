import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../Loading";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "https://fashion-collection-backend-rosy.vercel.app/api/products";
        if (category) {
          url += `?category=${category}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </>
  );
};

export default ProductList;
