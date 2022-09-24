const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

router.get("/", (req, res, next) => {
  db.all("SELECT * FROM Todo", (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send({ todos: rows });
    }
  });
});

router.post("/", (req, res, next) => {
  console.log("POST request to add : " + req.body);
  try {
    db.run(`INSERT INTO Todo (name) VALUES ("${req.body.todo}")`);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/", (req, res, next) => {
  console.log("DELETE request to remove : " + req.body.todo);
  try {
    db.run(`DELETE FROM Todo WHERE name="${req.body.todo}"`);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
