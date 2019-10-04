const express=require('express');
const app= express();
const port=8000;

//layout
const expressLayouts= require('express-ejs-layouts');

app.use(expressLayouts);



//extract styles and scripts for sub pages
app.set('layout extractStyles',true);

app.set('layout extractScripts',true);

// set up of static files

app.use(express.static('./assets'));

 // middleware : use express router 
app.use('/',require('./routes/index'));

// set up of view engine

app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err,){

    if (err){
        console.log(`error in running the server : ${err}`);
    }



    console.log(`server is up and running at port :${port}`);
});