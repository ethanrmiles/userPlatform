const express = require('express')
const router = express.Router()
const functions = require('../controllers/userController')
const { getAllUsers, newUser } = require('../controllers/userController')

router.get('/', getAllUsers)

router.post('/', newUser)

module.exports = router