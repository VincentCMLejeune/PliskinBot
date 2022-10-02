var express = require("express");
var workRouter = express.Router();

workRouter.get("/", function (req, res, next) {
  res.status(200).send("Hello work router");
});

module.exports = workRouter;
