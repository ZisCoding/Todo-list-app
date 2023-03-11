// require mongoose
const mongoose = require('mongoose');

// creating schema to store the task
const taskSchema = new mongoose.Schema({
    task: { 
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    task_type: {
        type: String,
    }
},{
    timeseries: true
})

// defining the schema as model
const Task = mongoose.model('Task',taskSchema);

// exporting the model
module.exports = Task;