const express = require('express')
const router = express.Router()
const User = require("../models/models")
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/user")
  
    router.get('/users', getUsers)
    router.get('/user/:id', getUser)
    router.post('/signup', createUser)
    router.put('/user/:id', updateUser)
    router.delete('/user/:id', deleteUser)  

module.exports = router;