const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signupUser = async (req, res) => {
  const { name, email, password, phoneNo } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email,
      phoneNo, 
      password: hashedPassword,
    });
    res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Can't create the user" }); 
  }
};