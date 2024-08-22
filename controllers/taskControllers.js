
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    const { project, name, description, status, tags, dueDate, assignedUser } = req.body;
    try {
        const task = await Task.create({ project, name, description, status, tags, dueDate, assignedUser });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTasksByProject = async (req, res) => {
    try {
        const tasks = await Task.find({ project: req.params.projectId });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
