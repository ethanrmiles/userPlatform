const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get all Users'})
})

router.post('/', (req,res) => {
    res.status(200).json({ message: "Post to Users"})
})

module.exports = router