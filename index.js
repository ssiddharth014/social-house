const express=require('express');
const cookieParser=require('cookie-parser');
const app= express();
const port=8000;

//layout
const expressLayouts= require('express-ejs-layouts');

const db=require('./config/mongoose');
// used for session cookie
const session = require('express-session');

const passport=require('passport');



const passportLocal= require('./config/passport-local-strategy');


const MongoStore=require('connect-Mongo')(session);



app.use(express.urlencoded());

app.use(cookieParser());

app.use(expressLayouts);



//extract styles and scripts for sub pages
app.set('layout extractStyles',true);

app.set('layout extractScripts',true);

// set up of static files

app.use(express.static('./assets'));



// set up of view engine

app.set('view engine','ejs');
app.set('views','./views');


app.use(session({
    name:'social-house',
    secret:"blahsomething",
    saveUnintialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 *100)
    },
    store:new MongoStore(
        {
            mongooseConnection:db,
            autoRemove:'disabled'
        },
        function(err){
            console.log(err||'connect mongodb set up ok');
        }
    )
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);

 // middleware : use express router 
app.use('/',require('./routes/index'));

app.listen(port,function(err,){

    if (err){
        console.log(`error in running the server : ${err}`);
    }



    console.log(`server is up and running at port :${port}`);
});