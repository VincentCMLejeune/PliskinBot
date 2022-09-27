const express = require("express");
const fitnessRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

fitnessRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Fitness", (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send({ fitness: rows });
    }
  });
});

module.exports = fitnessRouter;
