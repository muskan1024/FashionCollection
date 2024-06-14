import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Login from "../Login";
import Navbar from "../Navbar";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Footer from "../Footer";
import ProductCard from "./ProductCard";
import Loading from "../Loading";
import shop from '../shop.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
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
      sentences = [product.description];
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3002/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        fetchRelatedProducts(response.data);
      })
      .catch((error) => {
        console.log("Error fetching product details:", error);
      });
  }, [id]);

  const fetchRelatedProducts = async (productData) => {
    const { category, brand } = productData;
    try {
      const response = await axios.get(`http://localhost:3002/api/related`, {
        params: {
          category,
          brand,
          exclude: id,
        },
      });
      setRelatedProducts(response.data);
    } catch (error) {
      console.log("Error fetching related products:", error);
    }
  };
  useEffect(() => {
    axios
      .get("http://localhost:3002/api/products")
      .then((response) => {
        const top4 = response.data.slice(0, 4);
        setTopProducts(top4);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(true);
      });
  }, []);
  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <div className="mt-20 max-w-[90%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[80%] mx-auto">
        <div className="grid sm:flex gap-10 md:gap-5 lg:gap-10 ">
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
            <div className="grid lg:flex gap-3 lg:gap-5 my-5">
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
        <div className="related-products mt-10 bg-gray-100 p-1 sm:p-3">
          <h2 className="text-base sm:text-xl font-semibold mb-5">
            Products Related to this Item
          </h2>
          <div id="brand" className="brand grid gap-3 sm:gap-5 justify-items-center grid-flow-col sm:pl-5 scroll-m-2">
            {/* lg:grid-cols-4 md:grid-cols-3 grid-cols-2 */}
            {relatedProducts.map((relatedProduct) => (
              <div className="w-56 h-full pb-3">
                <ProductCard
                  key={relatedProduct._id}
                  product={relatedProduct}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="mb-5 font-serif text-xl sm:text-2xl mt-10">Recommended Products</div>
          <div className="grid gap-2 sm:gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            {loading ? (
              <Loading />
            ) : (
              topProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
