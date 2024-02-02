const express = require("express");
const GameController = require("../controller/GameController");
const router = express.Router();

router
  .post("/create", GameController.create)
  
module.exports = router;
