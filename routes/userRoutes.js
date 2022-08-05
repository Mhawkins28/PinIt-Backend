const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");

/*---------- Public Routes ----------*/
router.post("/signup", userCtrl.signup);

router.post("/login", userCtrl.login);

/*---------- Protected Routes ----------*/

module.exports = router;
