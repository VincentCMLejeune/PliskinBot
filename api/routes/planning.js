const express = require("express");
const planningRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

planningRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Calendar", (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send({ planning: rows });
    }
  });
});

planningRouter.get("/:year/:month", (req, res, next) => {
  db.all(
    `SELECT * FROM Calendar WHERE year="${req.params.year}" AND month="${req.params.month}"`,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.send({ planning: rows });
      }
    }
  );
});

module.exports = planningRouter;
