const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const usersRouter = require('./routes/usersRoutes')
const userRouter = require('./routes/userRoute')
const connectDatabase = require('./Database/db')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    
});

app.use('/api/users', usersRouter)
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    connectDatabase()
    console.log(`Server running on port ${PORT}`)
})