//1
const express=require('express');

//2
const router=express.Router();

//4
const homeController=require('../controllers/home_controller');




//5
router.get('/',homeController.home);
//3
module.exports=router;