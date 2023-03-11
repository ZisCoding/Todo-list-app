// require express module 
const express = require('express');
// initialize express 
const app = express();
// define port 
const port = 8000;




// startin the server 
app.listen(port , (data , err)=>{
    if(err){
        console.error("Error in starting server",err);
        return ;
    }

    console.log("Server is up and running at",port);
    return ;
})
