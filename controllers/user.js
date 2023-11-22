const User = require("../models/models")
exports.getUsers = async(req, res) => {
    try{
      const users = await User.find({})
      res.status(200).json(users)
    } catch (err) {
      console.log(err.message);
      res.status(500).json({error: err.message})
    }
  }

exports.getUser = async(req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: err.message})
    }
  }

exports.createUser = async(req, res, next) => {
    try {
    const user = await User.create(req.body)
    res.status(200).json(user)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: err.message})
    }
  }

exports.updateUser = async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!user) throw Error(res.status(404).json({message: 'User not found'}))
        res.status(200).json(user)
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: err.message})
    }
}

exports.deleteUser = async(req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) throw Error(res.status(404).json({message: 'User not found'}))
        res.status(200).json({message: 'User deleted'})
    } catch (err) {
        console.log(err.message);
        res.status(500).json({error: err.message})
    }
 }