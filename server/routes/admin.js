const express = require('express')
const router = express.Router();
const{deleteUser,getUsers}=require('../controllers/admin');
const { authMiddleware } = require('../middleware/userAuth');
const User = require("../models/userSchema");


//router.post('/',authMiddleware,delateUser)
router.get('/users',getUsers)
router.delete('/deleteuser/:id',deleteUser)



module.exports = router; 
