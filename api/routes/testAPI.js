const express = require("express");
const testAPIRouter = express.Router();

testAPIRouter.get("/", (req, res, next) => {
  res.status(200).send("Connected to backend");
});

module.exports = testAPIRouter;
