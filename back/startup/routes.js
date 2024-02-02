const express = require("express");
const user = require("../src/routes/user");
const game = require("../src/routes/game");


module.exports = function (app) 
{
  app
    .use(express.json())
    .use("/api/user", user)
    .use("/api/game", game);
};
