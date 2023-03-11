// require express module 
const express = require('express');
// initialize express 
const app = express();
// define port 
const port = 8000;
// require path
const path = require('path');
// require ejs for views
const ejs = require('ejs');
// require mongoose to access db
const mongoose = require('mongoose');

//conenct to db using config
const db = require(path.join(__dirname,'/config/mongoose.js'));


// set app view engine to ejs
app.set('views engine','ejs');
// set app to look for  views in views folder while rendering 
app.set('views',path.join(__dirname,'/views'));



// set up routes all req will be redirected to this route
app.use('/',require(path.join(__dirname,'/routes')));


// startin the server 
app.listen(port , (data , err)=>{
    if(err){
        console.error("Error in starting server",err);
        return ;
    }

    console.log("Server is up and running at",port);
    return ;
})
