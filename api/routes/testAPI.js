const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Pliskin BOT API says : hello");
});

module.exports = router;
