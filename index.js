const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");

// Loading the environment variables
dotenv.config();

// Connecting to Mongo database
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to DB Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

// to parse incoming JSON requests and puts the parsed data in req
app.use(express.json());

// ENDPOINTS
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// Listening connections
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend Server is running");
});
