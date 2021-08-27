const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
require("dotenv").config({ path: "./config/.env" });
exports.register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { firstname, lastname, email, adress, password, tel,role } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser)
      return res.status(400).json({ errors:[{msg:'you already have an account '}] });
    const cryptPassword = await bcrypt.hash(password, 12); 
    const newUser = new User({
      firstname,
      lastname,
      email,
      adress,
      password: cryptPassword,
      tel,
      role
    });
    const user = await newUser.save();
    console.log(user)
    const token = await jwt.sign({ email, id: user._id }, "khaouint");
    res.status(200).json({ user:user, token });
  } catch (error) {
    return res.status(500).json({ message: "something wrong:${error}" });
  }
};
exports.login = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    const existUser = await User.findOne({ email: email });
    if (!existUser)
      res.status(400).json({ message: "this mail does not exist" });
    const validatePassword = await bcrypt.compare(password, existUser.password);
    if (!validatePassword) res.status(400).json({ message: "wrong Password" });
    const token = await jwt.sign({ email, id: existUser._id }, "khaouint");
    res.status(200).json({ user:existUser, token });
  } catch (error) {
    res.status(500).json({ message: "something wrong:${error}" });
  }
};
