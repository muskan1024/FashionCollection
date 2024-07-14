import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Add, DeleteForever, Remove, WhatsApp } from "@mui/icons-material";
import { toast } from "react-hot-toast";

import {
  decrementQty,
  incrementQty,
  removeFromCart,
  setCartItems,
} from "../redux/slices/CartSlice";
import axios from "axios";
import ProductCard from "./Product/ProductCard";
import Loading from "./Loading";
import Footer from "./Footer";
import { useUserContext } from "./UserContext";

const Cart = () => {
  const [showLogin, setShowLogin] = useState(false);
  const cartItems = useSelector((state) => state.cart.carts) || [];
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [topProduct, setTopProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useUserContext();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (userData && userData._id) {
          const response = await axios.get(
            `https://fashion-collection-backend-rosy.vercel.app/api/cart/${userData._id}`
          );
          dispatch(setCartItems(response.data));
          console.log(response.data);
        }
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (userData && userData._id) {
      fetchCartItems();
    }
  }, [dispatch, userData]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = cartItems.map((item) => item.productId);
        const response = await axios.post(
          "https://fashion-collection-backend-rosy.vercel.app/api/cartproducts",
          { productIds }
        );
        setProducts(response.data);
        console.log("fetched products:", response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProducts();
  }, [cartItems]);
  const handleUpdateCartItem = async (productId, quantity) => {
    try {
      if (userData && userData._id) {
        await axios.put("https://fashion-collection-backend-rosy.vercel.app/api/cart/update", {
          userId: userData._id,
          productId,
          quantity,
        });
      } else {
        let sessionCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const existingItem = sessionCart.find(
          (cartItem) => cartItem.productId === productId
        );
        if (existingItem) {
          existingItem.quantity = quantity;
        }
        sessionStorage.setItem("cart", JSON.stringify(sessionCart));
      }
      if (quantity > 0) {
        dispatch(incrementQty({ productId, quantity }));
      } else {
        dispatch(decrementQty({ productId, quantity }));
      }
    } catch (error) {
      console.error("Error updating cart item:", error);
      toast.error("Failed to update item in cart.");
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      if (userData && userData._id) {
        await axios.delete(
          `https://fashion-collection-backend-rosy.vercel.app/api/cart/remove/${userData._id}/${productId}`
        );
      } else {
        let sessionCart = JSON.parse(sessionStorage.getItem("cart")) || [];
        sessionCart = sessionCart.filter(
          (cartItem) => cartItem.productId !== productId
        );
        sessionStorage.setItem("cart", JSON.stringify(sessionCart));
      }
      dispatch(removeFromCart({ productId }));
    } catch (error) {
      console.error("Error removing from cart:", error);
      toast.error("Failed to remove item from cart.");
    }
  };


  const totalQty = cartItems.reduce(
    (totalQty, item) => totalQty + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
   const createCartWhatsAppLink = (cartItems, products) => {
    if (!cartItems.length) return null;

    let message = "*Hi, I would like to book the following items from my cart:*\n\n";
    cartItems.forEach((item, index) => {
      const product = products.find((p) => p._id === item.productId);
      const productImage = product.image && product.image[0]
      if (product) {
        const productLink = `https://fashion-collection-backend-rosy.vercel.app/shop/products/${product._id}`;
        message += `*${index + 1}. ${product.productName}*\n`;
        message += `   *- Quantity:* ${item.quantity}\n`;
        message += `   *- Price:* ₹${product.discountPrice}\n`;
        message += `   *- Brand:* ${product.brand}\n`;
        message += `   *Product Image:* ${productImage}\n`;
        message += `   *Product Link:* ${productLink}\n\n\n`
      }
    });
    message += `*Total Items: ${totalQty}*\n`
    message += `*Total Price: ₹${totalPrice}*\n\n\n`;
    if (userData) {
      message += `*Contact Details:*\n`;
      message += `     *Name:* ${userData.fullName}\n`;
      message += `     *Mobile No:* +91${userData.contactNumber}\n`; 
      message += `     *Email:* ${userData.email}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/918857831831?text=${encodedMessage}`;
  };

  const handleBookNowClick = (e) => {
    if (!userData) {
      e.preventDefault(); 
      setShowLogin(true); 
    } else {
      const whatsappLink = createCartWhatsAppLink(cartItems, products);
      if (whatsappLink) {
        window.open(whatsappLink, "_blank"); 
      }
    }
  };
  useEffect(() => {
    axios
      .get("https://fashion-collection-backend-rosy.vercel.app/api/products")
      .then((response) => {
        const top4 = response.data.slice(0, 4);
        setTopProduct(top4);
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
        {cartItems.length > 0 && (
          <>
            <div className="md:grid grid-flow-col md:grid-cols-4 justify-between m-2">
              <div className="text-3xl text-center p-2 col-span-2 lg:col-span-3 hidden md:block">
                You have {totalQty} item(s) in the cart
              </div>
              <div className="col-span-2 lg:col-span-1 text-xl text-center bg-slate-100 grid w-full gap-2 justify-items-center p-2 rounded-md">
                <div>
                  Subtotal({totalQty} item's):
                  <span className="font-bold"> ₹{totalPrice}</span>
                </div>
                <div className="text-base py-2 bg-slate-700 font-bold text-white rounded-lg p-1 w-[80%] ">
                  <a
                    href="#"
                    // href="https://wa.me/918857831831"
                    className="hover:text-cyan-500 pb-1"
                    onClick={handleBookNowClick}
                  >
                    <button>
                      <WhatsApp /> Message/Call to Book Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              {cartItems.map((cartItem) => {
                const product = products.find(
                  (p) => p._id === cartItem.productId
                );
                return product ? (
                  <div
                    key={cartItem.productId}
                    className="grid  mx-auto w-[100%] m-5 md:w-[80%] lg:w-[75%] gap-2 shadow-lg justify-self-center  rounded-lg p-3"
                  >
                    <Link
                      to={`/shop/products/${product._id}`}
                      className="flex gap-3"
                    >
                      <img
                        src={product.image[0]}
                        alt={`${product.brand} image`}
                        className="w-[100px] sm:w-[130px] h-[100%] "
                      />
                      <div className="flex flex-col gap-1">
                        <div className="text-lg font-semibold font-sans h-[28px] overflow-hidden text-ellipsis">
                          {product.productName}
                        </div>
                        <div className="text-lg font-semibold text-green-800">
                          ₹ {product.discountPrice}
                        </div>
                        <div className="font-semibold">
                          <span className="font-normal text-gray-500">
                            Brand:{" "}
                          </span>{" "}
                          {product.brand}
                        </div>
                        <div className="flex gap-2 mt-2">
                          <label htmlFor="">Quantity</label>
                          <Remove
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              cartItem.quantity > 1
                                ? dispatch(
                                    decrementQty({
                                      productId: cartItem.productId,
                                    })
                                  )
                                : dispatch(
                                    removeFromCart({
                                      productId: cartItem.productId,
                                    })
                                  );
                            }}
                            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 cursor-pointer text-xl"
                          />
                          <span>{cartItem.quantity}</span>
                          <Add
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              if (cartItem.quantity < product.quantity) {
                                handleUpdateCartItem(
                                  cartItem.productId,
                                  cartItem.quantity + 1
                                );
                              } else {
                                toast.error(
                                  "Cannot add more items. Maximum quantity reached.!"
                                );
                              }
                            }}
                            className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 cursor-pointer text-xl"
                          />
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleRemoveFromCart(cartItem.productId);
                            }}
                            className="cursor-pointer ml-2"
                          >
                            <DeleteForever className="hover:text-red-500" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null;
              })}
            </div>
          </>
        )}
        {cartItems.length === 0 && (
          <div className="mt-20 mx-9">
            <div className=" flex-col flex justify-center rounded-xl shadow-lg h-52 items-center bg-gray-100 ">
              <h1 className="font-mono text-xl text-red-500 ">
                Your Shopping Cart is empty!!
              </h1>
              <Link to="/shop">
                <button className=" shadow-xl mt-2 border-2 p-2 rounded-xl transition-all bg hover:text-sm hover:border-grey hover:bg-red-100">
                  Continue Shopping.
                </button>
              </Link>
            </div>
          </div>
        )}
        <div>
          <div className="mb-5 font-serif text-xl sm:text-2xl mt-10">
            Recommended Products
          </div>
          <div className="grid gap-2 sm:gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            {loading ? (
              <Loading />
            ) : (
              topProduct.map((product) => (
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

export default Cart;
