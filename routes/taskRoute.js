const express = require("express");
const {
  addTask,
  getTasks,
  editTask,
  removeTask,
} = require("../Controller/taskController");
const isAuth = require("../Middleware/isAuth");

const router = express.Router();

router.post("/add", isAuth, addTask);
router.get("/all", isAuth, getTasks);
router.patch("/edit/:taskId", isAuth, editTask);
router.delete("/remove/:taskId", isAuth, removeTask);

module.exports = router;
