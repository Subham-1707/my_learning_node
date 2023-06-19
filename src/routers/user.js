const express = require("express");
const User = require("../models/User");
const Auth = require("../middleware/auth");
const userController = require("../controllers/userController");
const router = new express.Router();

//signup:
router.post("/users", userController.createUser);

// login:
router.post("/users/login", userController.userlogin);

// Logout route :
router.post("/users/logout", Auth, userController.userlogout);
//Logout All
router.post("/users/logoutAll", Auth, userController.userlogoutAll);

module.exports = router;
