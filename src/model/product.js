const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    id: { type: String, require: true, unique: true },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      maxLength: 500,
      require: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

// const Product = mongoose.model("Product", productSchema);
// exports.Product = Product;
