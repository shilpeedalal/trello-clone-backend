const express = require('express')
const { createTask, getAllTasks, getTasksByProject } = require('../controllers/taskControllers')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.use(protect)
router.post('/',createTask)
router.get('/',getAllTasks)
router.get('/:projectId',getTasksByProject)

module.exports = router