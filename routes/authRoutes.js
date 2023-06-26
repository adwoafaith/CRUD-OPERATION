const express = require('express')
const router = express.Router()
const registerLogin = require('../controllers/authController')





router.post('/register',registerLogin.register)
router.post('/login',registerLogin.login)

module.exports = router;