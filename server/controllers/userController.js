
const User = require('../models/userModel')



const getAllUsers = async(req,res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    }catch(err){
        res.status(404).json({ message: 'Sorry, no users found'})
    }
}

const getUserById = async (req, res) => {
   try{ 
    const user = await User.find(req.params.id)
    res.status(200).json({ user })
   }catch(err){
    res.status(404).json({ message: "Sorry, no user was found"})
   }
}

const newUser = async (req, res) => {
    const data = {
        name: req.body.name,
        description: req.body.description
    }
    const newUser = new User(data)
    try{
        const user = await User.create({
            name: data.name,
            description: data.description
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