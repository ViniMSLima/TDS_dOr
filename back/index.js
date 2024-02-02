const express = require("express");
const router = require("./startup/routes");
require("./startup/db")();
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

router(app);
const port = 8080;
const server = app.listen(port, () =>
  console.log(`BOSCH STEAM A on ${port}`)
);
module.exports = server;
