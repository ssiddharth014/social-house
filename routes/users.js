//1
const express=require('express');

//2
const router=express.Router();

//4
const usersController=require('../controllers/users_controller');

//5
router.get('/profile',usersController.profile);

module.exports=router;