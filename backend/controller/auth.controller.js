const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");

//SignUp Controller
const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Fields Missing" });
    }

    //email validator
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Email format is invalid" });
    }

    //Check if the user is already registered.
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await User.create({
      fullName,
      email,
      password,
    });
    sendMail(email,fullName);

    const token = jwt.sign(
      { userId: newUser._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" } // TODO: Increase after the developement
    );

    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "strict",
    });

    res.status(201).json({ message: "User Created", newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All Fields are required" });
    }

    const isUser = await User.findOne({ email });

    if (!isUser) {
      return res.status(400).json({ message: "Invalid email and password" });
    }

    const validPass = await isUser.matchPassword(password);

    if (!validPass) {
      return res.status(400).json({ message: "Invalid email and password" });
    }

    const token = jwt.sign({ userId: isUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logged In Successfully", isUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Logout Controller
const logout = async (req, res) => {
  try {
    await res.clearCookie("jwt");
    res.status(200).json({ message: "Logged Out Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  signup,
  login,
  logout,
};
