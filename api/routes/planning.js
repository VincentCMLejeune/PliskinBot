var express = require("express");
var planningRouter = express.Router();

planningRouter.get("/", function (req, res, next) {
  res.status(200).send("Hello planning router");
});

module.exports = planningRouter;
