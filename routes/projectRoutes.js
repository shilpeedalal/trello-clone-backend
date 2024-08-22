const express = require('express')
const { protect } = require('../middlewares/authMiddleware')
const { createProject, getProjects, getProjectById } = require('../controllers/projectController')

const router = express.Router()

router.use(protect)
router.post('/',createProject)
router.get('/',getProjects)
router.get('/:id',getProjectById)

module.exports = router