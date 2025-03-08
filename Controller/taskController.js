const User = require("../Model/userModel");

exports.addTask = async (req, res) => {
  const { taskTitle, taskDescription } = req.body;
  const user = await User.findOne({ username: req.session.username });

  if (!user) return res.status(404).json({ message: "User not found" });

  user.tasks.push({ taskTitle, taskDescription });
  await user.save();

  res.json({ message: "Task added successfully", tasks: user.tasks });
};

exports.getTasks = async (req, res) => {
  const user = await User.findOne({ username: req.session.username });

  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user.tasks);
};

exports.editTask = async (req, res) => {
  const { taskId } = req.params;
  const { taskTitle, taskDescription } = req.body;

  const user = await User.findOneAndUpdate(
    { username: req.session.username, "tasks._id": taskId },
    {
      $set: {
        "tasks.$.taskTitle": taskTitle,
        "tasks.$.taskDescription": taskDescription,
      },
    },
    { new: true }
  );

  if (!user) return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task updated successfully", tasks: user.tasks });
};

exports.removeTask = async (req, res) => {
  const { taskId } = req.params;

  const user = await User.findOneAndUpdate(
    { username: req.session.username },
    { $pull: { tasks: { _id: taskId } } },
    { new: true }
  );

  if (!user) return res.status(404).json({ message: "Task not found" });

  res.json({ message: "Task deleted successfully", tasks: user.tasks });
};
