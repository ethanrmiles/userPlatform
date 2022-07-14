const User = require('../models/userModel')



const getAllUsers = async(req,res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    }catch(err){
        res.status(404).json({ message: 'Sorry, no users found'})
    }
}

const getUserById = async (id) => {
    const userById = await User.findById(id)
    return userById
    res.status(200).json({ message: 'This is my user profile'})
}

const newUser = async (req, res) => {
    console.log(req.body)
    // const data = req.body
    const newUser = new User(data)
    try{
        const user = await User.create({
            user: data
        })
        res.status(201).json({ user })
    }catch(err){
        res.status(400).json({ message: "Sorry, something went wrong"})
    }
}

const update = () => {
    res.status(200).json({ message: "Changes made to my user profile"})
}

module.exports = {
    getAllUsers, 
    getUserById,
    newUser,
    update
}