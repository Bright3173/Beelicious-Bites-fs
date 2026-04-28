const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Please enter product category"],
    },

    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    weight: {
      type: String,
      required: true,
      default: false,
    },

    initialPrice: {
      type: Number,
      required: true,
      default: false,
    },

    price: {
      type: Number,
      required: true,
      default: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
