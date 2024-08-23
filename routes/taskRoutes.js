const express = require('express')
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskControllers')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(protect)
router.post('/',createTask)
router.get('/',getAllTasks)
router.get('/:id',getTaskById)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router