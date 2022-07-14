const express = require('express')
const router = express.Router()
const { getUserById, update } = require('../controllers/userController')

router.get('/:id', getUserById)

router.put('/:id', update)

module.exports = router