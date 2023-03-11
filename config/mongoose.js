// requiring mongoose
const mongoose = require('mongoose');

// making a connection with mongo db 
const db = mongoose.connect('mongodb://127.0.0.1/Todo_app')
.then((connection)=>{
    console.log("Connected to DB sucessfully")
    return ;
})
.catch((err)=>{
    console.error("Error in connecting to DB",err);
    return;
})

// exporting the connection
module.exports = db;