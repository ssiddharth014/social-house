//1
const express=require('express');

//2
const router=express.Router();

//4
const usersController=require('../controllers/users_controller');



//5
router.get('/profile',usersController.profile);

router.get('/signUp',usersController.signUp);
router.get('/signIn',usersController.signIn);

router.post('/create',usersController.create);

module.exports=router;