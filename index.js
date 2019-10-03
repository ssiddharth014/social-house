const express=require('express');
const app= express();
const port=8000;


app.use('/',require('./routes/index'));

app.listen(port,function(err,){

    if (err){
        cdconsole.log(`error in running the server : ${err}`);
    }



    console.log(`server is up and running at port :${port}`);
});