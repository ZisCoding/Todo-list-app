// require express module 
const express = require('express');
// initialize express 
const app = express();
// define port 
const port = 8000;
// require path
const path = require('path');

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
