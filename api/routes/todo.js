const express = require("express");
const todoRouter = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

todoRouter.get("/", (req, res, next) => {
  db.all("SELECT * FROM Todo", (err, rows) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send({ todos: rows });
    }
  });
});

todoRouter.post("/", (req, res, next) => {
  console.log("POST request to add : " + req.body.todo);
  try {
    db.run(`INSERT INTO Todo (name) VALUES ("${req.body.todo}")`);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

todoRouter.delete("/", (req, res, next) => {
  console.log("DELETE request to remove : " + req.body.todo);
  try {
    db.run(`DELETE FROM Todo WHERE name="${req.body.todo}"`);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = todoRouter;
