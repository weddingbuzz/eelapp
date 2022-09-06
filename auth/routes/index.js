var express = require("express");
var router = express.Router();

// const db = mysql.createConnection({
//   host: "deveasyedulab.ck9nu1ggaric.ap-south-1.rds.amazonaws.com",
//   user: "root",
//   password: "lucifer-666",
//   database: "atsschool",
// });

// Require controller modules.
var login_controller = require('../controllers/loginController');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* Login. */
router.put('/login', login_controller.postLogin);

/* Refresh Token. */
router.put('/token', login_controller.postToken);

module.exports = router;
