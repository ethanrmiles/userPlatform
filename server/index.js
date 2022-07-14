const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const app = express()

const UserModel = require('./Users')
const PORT = process.env.PORT || 3001

app.use(express.json())

mongoose.connect('mongodb+srv://newuser:QPY5TvVWvcLCMkOT@take-home.506qia4.mongodb.net/app-users?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.use('/', (req,res) => {
    res.status(200).send('<h1>Welcome to the lowest level of the api</h1>')
})

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