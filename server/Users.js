const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // profilePicture: {
        
    // }
})

const Users = mongoose.model('user', UserSchema)
module.exports = Users