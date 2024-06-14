const express = require("express");
const { userSignIn, userSignUp } = require("./controllers/userController");
const { saveProduct, getProducts, getSuggestions, searchProducts, getProductById, getRelatedProducts } = require("./controllers/productController");
const multer = require("multer");
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

router.post("/api/auth/admin/products", upload.single("image"), saveProduct);
router.get("/api/products", getProducts);
router.get("/api/products/suggestions", getSuggestions);
router.get("/api/products/search", searchProducts);
router.get("/api/products/:id", getProductById);
router.get("/api/related", getRelatedProducts);

module.exports = router;
