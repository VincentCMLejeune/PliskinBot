const express = require("express");
const testAPIRouter = express.Router();

testAPIRouter.get("/", (req, res, next) => {
  res.send("Connected to backend");
});

module.exports = testAPIRouter;
