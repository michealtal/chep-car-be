const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./src/config/db_config");
const auth = require("./src/routes/auth.routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome micheal");
});
app.use("/api/v1/auth", auth);

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port :${PORT}`);
});
