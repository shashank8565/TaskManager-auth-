const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  taskTitle: { type: String, required: true },
  taskDescription: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  tasks: [TaskSchema],
});

module.exports = mongoose.model("User", UserSchema);
