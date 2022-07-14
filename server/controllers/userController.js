
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
    const user = await User.findById(req.params.id)
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

const update = async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(400).json({ message: "Sorry, that user does not exist"})
        }

        // const change = req.body.name || req.body.description
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true}
            )
            res.status(200).json(updatedUser)
    }catch(err){
        res.status(400).json({ message: "Cannot update user"})
    }
}

module.exports = {
    getAllUsers, 
    getUserById,
    newUser,
    update
}