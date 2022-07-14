const express = require('express')
const router = express.Router()
const { getUserById, update } = require('../controllers/userController')

router.get('/', getUserById)

router.put('/', update)

module.exports = router