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
  req.session.save((err) => {
    // ✅ Save session explicitly
    if (err) {
      console.log("❌ Error saving session:", err);
      return res.status(500).json({ message: "Session save error" });
    }
    console.log("✅ Session saved:", req.session);
    res.json({ message: "Logged in successfully" });
  });
};
