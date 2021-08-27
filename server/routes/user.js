const express=require('express')
const router=express.Router()
const{register}=require('../controllers/user');
const{login}=require('../controllers/user');
const validateUser = require('../controllers/validateUser');

router.post('/newUser',validateUser,register)
router.post('/login',login)
module.exports=router;