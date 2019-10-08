//1
const express=require('express');

//6
const passport=require('passport');
//2
const router=express.Router();

//4
const usersController=require('../controllers/users_controller');



//5
router.get('/profile',passport.checkAuthentication,usersController.profile);

router.get('/signUp',usersController.signUp);
router.get('/signIn',usersController.signIn);

router.post('/create',usersController.create);




router.post('/create-session',passport.authenticate("local",
{failureRedirect :'/users/signIn'}),
usersController.createSession
);
// logout route
router.get('/signOut',usersController.destroySession);

module.exports=router;