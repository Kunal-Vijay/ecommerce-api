const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// Loading the environment variables
dotenv.config();

// REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // encrypting password using crypto-js
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // checking if the user exist
    const user = await User.findOne({ username: req.body.username });

    !user && res.status(401).send("Wrong credentials");

    // decrypting password
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const pwd = hashedPassword.toString(CryptoJS.enc.Utf8);
    pwd !== req.body.password && res.status(401).send("Wrong credentials");

    const accessWebToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc; // desturcturing user
    res.status(200).json({ ...others, accessWebToken }); // sending user info other than password
  } catch (err) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
