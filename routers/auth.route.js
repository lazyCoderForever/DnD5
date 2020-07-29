const { Router } = require("express");
const router = Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// /api/auth/ register
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });
    if (candidate) {
      res.status(400).json({ 
      message: "Такой пользователь уже существует" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res
      .status(201)
      .json({ message: 
        "Пользователь успешно создан", status: 201 });
  } catch (e) {
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

//api.auth/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLogin = await User.findOne({ email });
    if (!userLogin) {
      res.status(400).json({ message:
         "Такой пользователь не найден" });
    }
    const isMatch = await bcrypt.compare(password,
       userLogin.password);
    if (!isMatch) {
      res.status(400).json({ message: 
        "Неверные введенные данные" });
    }
    const token = jwt.sign({ userId: userLogin.id }, 
      config.get("jwtKey"), {
      expiresIn: "1h",
    });
    res.json({ token, userId: userLogin.id });
  } catch (e) {
    res.status(500).json({ message: "что-то пошло не так " });
  }
});
module.exports = router;
