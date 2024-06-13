import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Login from "../Login";
import Navbar from "../Navbar";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Footer from "../Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  let sentences = [];

  //   Check if product.description exists before splitting
  if (product.description) {
    // Check if description contains a period
    if (product.description.includes(".")) {
      // Split the description by periods and filter out any empty strings
      sentences = product.description
        .split(".")
        .filter((sentence) => sentence.trim().length > 0);
    } else {
      // If description doesn't contain a period, use the entire description as one sentence
      sentences = [product.description];
    }
  }
  //   let sentences = [product.description];

  // Check if description contains a period
  //   if (sentences.includes(".")) {
  //     // Split the description by periods and filter out any empty strings
  //     sentences = sentences
  //       .split(".")
  //       .filter((sentence) => sentence.trim().length > 0);
  //   }
  //   let sentences = product.description;
  //   sentences.split.filter((sentence) => sentence.trim().length > 0);
  //   const sentences = product.description
  //     .split(".")
  //     .filter((sentence) => sentence.trim().length > 0);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
        setLoading(true);
      });
  }, [id]);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="grid sm:flex m-5 gap-10 mt-20 max-w-[90%] md:max-w-[80%] mx-auto">
        <img
          src={product.image}
          alt="Product Image"
          className="w-fit sm:w-[50%] mx-auto"
        />
        <div className="sm:pt-5">
          <div className="border-[1px] border-black p-2 w-fit mb-3 uppercase">
            {product.brand}
          </div>
          <div className="text-lg sm:text-2xl font-semibold mb-3 ">
            {product.productName}
          </div>
          <div className="border-b-2 mb-3"></div>
          <div className="mb-3">
            <span className="font-semibold text-lg sm:text-xl">
              Rs. {product.discountPrice}
            </span>
            <span className="pl-1 font-normal line-through text-gray-500">
              Rs. {product.originalPrice}
            </span>
          </div>
          <div></div>
          <div className="flex gap-5 my-5">
            <button className="w-full py-2 bg-slate-500 text-white font-semibold rounded-lg hover:shadow-md hover:shadow-gray-400">
              <ShoppingCartOutlined className="mr-2" /> Add to Cart
            </button>
            <button className="w-full py-2 bg-slate-700 text-white font-semibold rounded-lg hover:shadow-md hover:shadow-gray-400">
              Buy Now
            </button>
          </div>
          <div>
            <div className="text-lg font-semibold font-serif mb-2">
              Product Description
            </div>
            <div className="pl-4 text-pretty">
              {sentences.map((sentence, index) => (
                <div key={index} className="mb-3 font-serif">
                  {sentence.trim()}.
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetails;
