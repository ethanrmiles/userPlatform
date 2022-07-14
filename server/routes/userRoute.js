const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: 'This is my user profile'})
})

router.put('/', (req,res) => {
    res.status(200).json({ message: "Changes made to my user profile"})
})

module.exports = router