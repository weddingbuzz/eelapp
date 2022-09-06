var express = require('express');
var router = express.Router();

// Require controller modules.
var user_controller = require('../controllers/userController');

/* GET users listing. */
router.get('/', user_controller.createCord);

module.exports = router;
