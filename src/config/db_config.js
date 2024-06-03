const mongoose = require("mongoose");

require("dotenv").config();
const DB = process.env.DB_STRING;
console.log(DB);
const connectDB = async () => {
  try {
    console.log("Connecting....");
    await mongoose.connect(DB, {});
    console.log("Connection to database succefully");
  } catch (error) {
    console.error("Error connecting to data base:", error);
  }
};
module.exports = connectDB;
