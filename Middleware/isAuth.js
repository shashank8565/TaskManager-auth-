function isAuth(req, res, next) {
  console.log("🔥 isAuth middleware running...");

  if (req.session && req.session.username) {
    console.log("✅ Authorized:", req.session.username);
    return next();
  } else {
    console.log("❌ Unauthorized: No username in session");
    console.log("Session data:", req.session);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = isAuth;
