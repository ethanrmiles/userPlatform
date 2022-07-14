const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()
const usersRouter = require('./routes/usersRoutes')
const userRouter = require('./routes/userRoute')
const UserModel = require('./Users')
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', usersRouter)
app.use('/api/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})