const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    name: { type: String, required: true, minLength: 3, maxLenght: 30 },
    email: {
      type: String,
      required: true,
      minLength: 6,
      max: 200,
      unique: 80,
    },
    password: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 1024,
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
