const { required } = require("joi");
const mongoose = require("mongoose");

const Cart = mongoose.model(
  "cart",
  new mongoose.Schema(
    {
      userId: {
        type: String,
        ref: "User",
        required: true,
      },
      productId:{
        type: String,
        ref:"Product",
        required: true,
      },
      productName:{
        type: String,
        ref:"Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
    { timestamps: true }
  )
);
module.exports = { Cart };
