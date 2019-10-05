module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:"PROFILE"
    });
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: "SIGN UP"
    });
}


module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title: "SIGN IN"
    });
}
// get the sign up data

module.exports.create=function(req,res){

}

//get the sign in data


module.exports.createSession=function(req,res){

}