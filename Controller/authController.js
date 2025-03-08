const User = require("../Model/userModel");

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  const userExists = await User.findOne({ username });

  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  await User.create({ username, password });
  res.status(201).json({ message: "User created successfully" });
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  req.session.username = user.username;
  res.json({ message: "Logged in successfully" });
};
