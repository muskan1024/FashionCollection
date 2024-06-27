import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Login from "../Login";
import Navbar from "../Navbar";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Footer from "../Footer";
import ProductCard from "./ProductCard";
import Loading from "../Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import shop from "../shop.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);
  let sentences = [];
  const [selectedImage, setSelectedImage] = useState("");

  if (product.description) {
    if (product.description.includes(".")) {
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
        setSelectedImage(response.data.image[0]);
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
        <div className="flex md:flex-row flex-col gap-10 md:gap-5 lg:gap-10 max-h-fit">
          <div className="w-full md:w-1/2">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {product.image &&
                product.image.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${product.productName} ${index + 1}`}
                      className="object-cover mx-auto h-auto cursor-pointer"
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="sm:pt-5 md:w-1/2">
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
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            centeredSlides={false}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            scrollbar={{ draggable: true }}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation]}
            style={{ paddingLeft:"15px", paddingRight:"15px"  }}
          >
            {relatedProducts.map((relatedProduct) => (
              <SwiperSlide
                key={relatedProduct._id}
                style={{ width: "auto", height: "100%"}}
              >
                <div className="w-56 shadow-sm h-full bg-white mb-5">
                  <Link to={`/shop/products/${relatedProduct._id}`}>
                    <img
                      src={relatedProduct.image[0]}
                      alt=""
                      className="h-40 mx-auto"
                    />
                    <div className="pb-3">
                      <h1 className="text-center font-bold text-red-500">
                        {relatedProduct.brand}
                      </h1>
                      <h1 className="px-3 text-center sm:text-base text-sm overflow-hidden text-ellipsis h-[75px]">
                        {relatedProduct.productName}
                      </h1>
                      <h1 className="font-semibold text-lg text-center">
                        Rs. {relatedProduct.discountPrice}{" "}
                        <span className="pl-1 font-normal line-through text-gray-500">
                          {" "}
                          MRP Rs. {relatedProduct.originalPrice}
                        </span>
                      </h1>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div>
          <div className="mb-5 font-serif text-xl sm:text-2xl mt-10">
            Recommended Products
          </div>
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
