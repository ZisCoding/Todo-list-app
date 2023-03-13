// require the Task model to create and delete task in db
const Task = require("../models/todo");

// action for home
module.exports.home = (req, res)=>{
    // find all the task then render the home page
    Task.find()
    .then((task)=>{
        return  res.render('home.ejs',{
            task:task
        });
    })
    .catch((err)=>{
        console.errpr("error in finding task",err);
        return  res.render('home.ejs',{
            task: undefined
        });
    })
}

// action for create task
module.exports.createTask = (req , res)=>{

    // create task then redirect to home page
    Task.create({
        task: req.body.discription,
        date: req.body.date,
        task_type: req.body.category
    })
    .then((task)=>{
        console.log("task created succesfully");
    })
    .catch((err)=>{
        console.log("error inm creating task",err);
    })
    
    res.redirect('back');
}

// action for deleting task
module.exports.deleteTask = (req , res)=>{
    // delete the task and redorect to home page
    Task.findByIdAndDelete(req.query.id)
    .then(()=>{
        return res.redirect('/');
    })
    .catch((err)=>{
        console.log("errro in deleting contact",err);
        return res.redirect('/');
    })
}