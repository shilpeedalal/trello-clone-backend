const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  try {
    const { name, description, status, tags, dueDate, assignedUser, project_id } = req.body;
    const task = new Task({ name, description, status, tags, dueDate, assignedUser, project_id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate('project_id').populate('assignedUser');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate('project_id').populate('assignedUser');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { name, description, status, tags, dueDate, assignedUser, project_id } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { name, description, status, tags, dueDate, assignedUser, project_id },
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
