const express = require("express");
const { default: mongoose } = require("mongoose");
var cors = require("cors");
const connectDB = require("./config/Db");
const authRoute = require("./routes/authRoute");
const taskRoute = require("./routes/taskRoute");

const app = express();
require("dotenv").config();
const session = require("express-session");
app.use(
  cors({
    origin: "https://task-manager-frontend-rcbn.vercel.app", // Change to your frontend's URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("trust proxy", 1);
app.use(
  session({
    secret: "90909090909090909090909090909090909090909099999999999999999999",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

const port = 3000;

connectDB();

app.use("/auth", authRoute);
app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log("Server connected");
});
