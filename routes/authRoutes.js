const express = require('express')
const { registerUser, loginUser } = require('../controllers/authController')
const validateUser = require('../middlewares/validateMiddleware')

const router = express.Router()

router.use(validateUser)
router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router