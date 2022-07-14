const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.MONGO_URI || 'mongodb+srv://newuser:QPY5TvVWvcLCMkOT@take-home.506qia4.mongodb.net/app-users'


const connectDatabase = async () => {
    try{
        const connect = await mongoose.connect(URI)
        console.log(`Mongo connected at ${connect.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDatabase