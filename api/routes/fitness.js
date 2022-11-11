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

fitnessRouter.post("/", (req, res, next) => {
  console.log("POST request to add : " + req.body.muscle);
  const muscle = req.body.muscle;
  const localization = req.body.localization;
  const weight = req.body.weight;
  const params = [muscle, localization, weight];
  const sql =
    "INSERT INTO Fitness (muscle, localization, weight) VALUES (?, ?, ?)";
  db.run(sql, params, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(req.body);
    }
  });
});

fitnessRouter.delete("/", (req, res, next) => {
  console.log("DELETE request to remove : " + req.body.muscle);
  try {
    db.run(`DELETE FROM Fitness WHERE muscle="${req.body.muscle}"`);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = fitnessRouter;
