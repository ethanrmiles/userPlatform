const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add Name']
    },
    description: {
        type: String,
        required: [true, 'Please add description']
    },
    
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('Users', userSchema)