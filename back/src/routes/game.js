const express = require("express");
const GameController = require("../controller/GameController");
const router = express.Router();

router
  .post("/create", GameController.create)
  .get("/get", GameController.get)
  
module.exports = router;
