// require express
const express = require('express');
// call the Router in express
const router = express.Router();

// require homecontrooiller to perform  action accroding to requests
const homeController = require('../controllers/home_controller');

// setting the action for home route
router.get('/', homeController.home);
// setting the action for create-task route
router.post('/create-task', homeController.createTask);
// setting the action for delete route
router.get('/delete',homeController.deleteTask);

// exporting the rouuter 
module.exports = router;