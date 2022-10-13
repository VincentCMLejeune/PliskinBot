const express = require("express");
const stellarisRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

stellarisRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Stellaris", (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send({ stellaris: rows });
    }
  });
});

module.exports = stellarisRouter;
