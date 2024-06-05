const mongoose = require("mongoose");
const Joi = require("joi");

const User = mongoose.model(
    "user",
    new mongoose.Schema({
        fullName: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 50,
          },
          email: {
            type: String,
            required: true,
            unique: true,
            minLength: 5,
            maxLengh: 255,
          },
          password: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 1024,
          },
          contactNumber: {
            type: Number,
            min: 1000000000,
            unique: true,
          },
          address: {
            house: String,
            street: String,
            landmark: String,
            city: String,
            postalCode: String,
            country: String,
          },
    },{ timestamps: true })
);
const validateUser = (user) => {
    const userSchema = Joi.object({
      fullName: Joi.string().min(0).max(50).required(),
      password: Joi.string().min(5).max(50).required(),
      email: Joi.string().email().min(5).max(255).required(),
      contactNumber: Joi.string().min(10).max(10).required(),
      address: Joi.object({
        house: Joi.string().min(0).max(20).optional(),
        street: Joi.string().min(0).max(50).optional(),
        landmark: Joi.string().min(0).max(50).optional(),
        city: Joi.string().min(0).max(50).optional(),
        state: Joi.string().min(0).max(25).optional(),
        postalCode: Joi.string().min(0).max(20).optional(),
        country: Joi.string().min(0).max(50).optional(),
      }),
    });
  
    const validationResult = userSchema.validate(user);
    return validationResult;
  };
  
  
  module.exports = { User, validateUser};