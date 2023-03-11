const express = require('express');

const router = express.Router();

// require homecontrooiller to perform  action accroding to requests
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

module.exports = router;