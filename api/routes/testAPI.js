const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Connected to backend");
});

module.exports = router;
