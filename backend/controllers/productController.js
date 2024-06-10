const cloudinary = require("cloudinary").v2;
const { Product } = require("../models/product");

async function saveProduct(req, res) {
  const { ...productData } = req.body;
  let image_url;

  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      image_url = result.secure_url;
      console.log("Image URL:", image_url);
    } else {
      throw new Error("Image upload failed: No image file provided");
    }

    const product = new Product({ ...productData, image: image_url });
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }
}

async function getProducts(req, res) {
  try {
    const products = await Product.find().sort({createdAt: -1}) ;
    res.json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { saveProduct, getProducts };
