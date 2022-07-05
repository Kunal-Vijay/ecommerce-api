const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");

// Loading the environment variables
dotenv.config();

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // encrypting password using crypto-js
    password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
