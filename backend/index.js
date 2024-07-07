const express = require("express");
const { userSignIn, userSignUp } = require("./controllers/userController");
const { saveProduct, getProducts, getSuggestions, searchProducts, getProductById, getRelatedProducts, cartProducts } = require("./controllers/productController");
const multer = require("multer");
const { addToCart, updateCartItem, removeFromCart, clearCart, getCartItems } = require("./controllers/cartController");
const router = express.Router();
const cloudinary = require("cloudinary").v2;


const storage = multer.diskStorage({});
const upload = multer({ storage });

cloudinary.config({
  cloud_name: "dybaacast",
  api_key: "874591124149691",
  api_secret: "WHMfC90uRUUA71-y_kC_c01RdyU",
  secure: true,
});

router.post("/api/auth/user/login", userSignIn);
router.post("/api/auth/user/signup", userSignUp);
router.post("/api/auth/admin/products", upload.array("images", 10), saveProduct)
router.get("/api/products", getProducts);
router.get("/api/products/suggestions", getSuggestions);
router.get("/api/products/search", searchProducts);
router.get("/api/products/:id", getProductById);
router.get("/api/related", getRelatedProducts);
router.post("/api/cartproducts", cartProducts);//get products in cart by there id

// cart function 
router.post("/api/cart/add", addToCart)
router.put("/api/cart/update", updateCartItem)
router.delete("/api/cart/remove/:userId/:productId", removeFromCart)
router.get("/api/cart/:userId", getCartItems);
router.delete("/api/cart/clear/:userId", clearCart);

module.exports = router;
