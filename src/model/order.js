const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [],
    subtotal: { type: Number, require: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, required: true, default: "pending" },
    payment_status: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
