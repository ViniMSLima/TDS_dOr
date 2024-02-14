const express = require("express");
const UserController = require("../controller/UserController");
const router = express.Router();

router
  .post("/register", UserController.register)
  .post("/login", UserController.login)
  .post("/isadm", UserController.isAdm)
  
module.exports = router;
