const Task = require('../models/Task');

// @desc    Get tasks for the logged-in user
// @route   GET /api/tasks
const getTasks = async (req, res) => {
    // Find tasks where the 'user' field matches the currently logged-in user's ID
    const tasks = await Task.find({ user: req.user.id });
    res.status(200).json(tasks);
};

// @desc    Create a new task
// @route   POST /api/tasks
const setTask = async (req, res) => {
    if (!req.body.text) {
        return res.status(400).json({ message: 'Please add a text field' });
    }

    const task = await Task.create({
        text: req.body.text,
        user: req.user.id, // Attach the logged-in user's ID to the task
    });

    res.status(201).json(task);
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }

    // Make sure the logged-in user actually owns this task before deleting it
    if (task.user.toString() !== req.user.id) {
        return res.status(401).json({ message: 'User not authorized to delete this task' });
    }

    await task.deleteOne();
    res.status(200).json({ id: req.params.id });
};

module.exports = { getTasks, setTask, deleteTask };