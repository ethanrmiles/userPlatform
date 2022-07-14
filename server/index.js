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

mongoose.connect('mongodb+srv://newuser:QPY5TvVWvcLCMkOT@take-home.506qia4.mongodb.net/app-users?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use('/api/users', usersRouter)
app.use('/api/user', userRouter)

app.get('/', async(req, res) => {
    const user = new UserModel({name: 'Ethan', description: 'foobarbaz'})
    try{
        await user.save()
    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})