const express = require('express')
const mongoose = require('mongoose')
const app = express()

const UserModel = require('./Users')

app.use(express.json())

mongoose.connect('mongodb+srv://newuser:QPY5TvVWvcLCMkOT@take-home.506qia4.mongodb.net/app-users?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

app.get('/', async(req, res) => {
    const user = new UserModel({name: 'Ethan', description: 'foobarbaz'})
    try{
        await user.save()
    }catch(err){
        console.log(err)
    }
})

app.listen(3001, () => {
    console.log('Server running on port 3001')
})