const express = require('express');
const router = express.Router();
const { getTasks, setTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');

// Secure the GET and POST routes
router.route('/').get(protect, getTasks).post(protect, setTask);

// Secure the DELETE route (requires the task ID in the URL)
router.route('/:id').delete(protect, deleteTask);

module.exports = router;