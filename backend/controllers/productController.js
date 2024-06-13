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
    const { category, search } = req.query;
    let query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.productName = { $regex: search, $options: "i" }; 
    }

    const products = await Product.find(query).sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function searchProducts(req, res) {
  try {
    const { q } = req.query;
    const tokens = q.split(/\s+/);
    const regexTokens = tokens.map((token) => new RegExp(token, "i"));

    const andCondition = {
      $and: [
        {
          $or: [
            { description: { $all: regexTokens } },
            { brand: { $all: regexTokens } },
            { category: { $all: regexTokens } },
            { name: { $all: regexTokens } },
            { price: { $all: regexTokens.map((token) => isNaN(token) ? token : parseFloat(token)) } }
          ]
        }
      ]
    };

    const orCondition = {
      $or: [
        { description: { $in: regexTokens } },
        { brand: { $in: regexTokens } },
        { category: { $in: regexTokens } },
        { name: { $in: regexTokens } },
        { price: { $in: regexTokens.map((token) => isNaN(token) ? token : parseFloat(token)) } }
      ]
    };

    let products = await Product.find(andCondition).sort({ createdAt: -1 });

    if (products.length === 0) {
      products = await Product.find(orCondition).sort({ createdAt: -1 });
    }

    res.json(products);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getSuggestions(req, res) {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { brand: { $regex: search, $options: "i" } }, // Match brand
          { category: { $regex: search, $options: "i" } }, // Match category
          { productName: { $regex: search, $options: "i" } }, // Match product name
        ],
      };
    }

    const suggestions = await Product.find(query).limit(10); // Limiting to 10 suggestions
    res.json(suggestions);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getProductById(req, res) {
  let product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404).send(`Product with id ${req.params.id} not found`);
    return;
  }

  res.send(product);
}


module.exports = { saveProduct, getProducts, getSuggestions, searchProducts, getProductById };
