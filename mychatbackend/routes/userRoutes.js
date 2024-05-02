const express=require('express');

const router=express.Router();

const UserController=require('../controllers/userController');

router.post('/signup',UserController.signupUser);

module.exports=router;