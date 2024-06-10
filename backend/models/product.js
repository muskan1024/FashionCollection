const mongoose = require("mongoose");

const Product = mongoose.model(
  "product",
  new mongoose.Schema(
    {
      sellerID: {
        type: String,
        required: true,
      },
      productName: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      originalPrice: {
        type: Number,
        required: true,
      },
      discountPrice:{
        type: Number,
        required: true,
      },
      description: {
        type: String,
      },
      brand: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);
module.exports = { Product };
