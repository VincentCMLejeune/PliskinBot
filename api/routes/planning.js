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

planningRouter.get("/:year", (req, res, next) => {
  db.all(
    `SELECT * FROM Calendar WHERE year="${req.params.year}"`,
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

planningRouter.get("/:year/:month/:day", (req, res, next) => {
  db.all(
    `SELECT * FROM Calendar WHERE year="${req.params.year}" AND month="${req.params.month}" AND day="${req.params.day}"`,
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

planningRouter.put("/:year/:month/:day", (req, res, next) => {
  const year = req.params.year;
  const month = req.params.month;
  const day = req.params.day;
  const occupation = req.body.occupation;
  const params = [occupation, year, month, day];
  const sql =
    "UPDATE Calendar SET occupation = ? WHERE year = ? AND month = ? AND day = ?";
  db.run(sql, params, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = planningRouter;
