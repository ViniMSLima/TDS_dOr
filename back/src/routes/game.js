const express = require("express");
const GameController = require("../controller/GameController");
const router = express.Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router
  .post("/create", upload.single('gamePath'), GameController.create)
  .post("/get", GameController.get)
  .post("/getzip", GameController.getZip)
  .delete("/deletezip", GameController.deleteZip)

module.exports = router;