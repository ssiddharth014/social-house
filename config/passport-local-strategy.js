const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const User=require('../models/user');


//authentication using passport



passport.use( new LocalStrategy({
    usernameField : 'email'
},
function(email, password , done){
    // find a user and establish the identity

    User.findOne({email : email},function(err,user){
        if(err){
            console.log('error in finding user-->passport');
            return done(err);
        }
        if (!user || user.password != password){
            console.log('invalid username/password');
            return done(null,false);
        }

        return done(null,user);
    });
}
));

// serialzing the user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done (null,user.id);
});

//deserializing the user from the key in the cookies

passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if (err){

            console.log('error in finding user --> passport');
            return done(err);
        }
        return done(null,user);
    });
});
// check if the user is authenticated
passport.checkAuthentication=function(req,res,next)
{
    if (req.isAuthenticated()){
        return next();
    }
    //if the user is not signed in 

    return res.redirect('/users/signIn');
}
//  passing signed users info which is in req.user to res.local to be used in views

passport.setAuthenticatedUser=function(req,res,next){
    if (req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;