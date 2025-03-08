const express = require("express");
const { default: mongoose } = require("mongoose");

const connectDB = require("./config/Db");
const authRoute = require("./routes/authRoute");
const taskRoute = require("./routes/taskRoute");

const app = express();
require("dotenv").config();
const session = require("express-session");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "90909090909090909090909090909090909090909099999999999999999999",
    resave: false,
    saveUninitialized: false,
  })
);

const port = 3000;

connectDB();

app.use("/auth", authRoute);
app.use("/tasks", taskRoute);

app.listen(port, () => {
  console.log("Server connected");
});
