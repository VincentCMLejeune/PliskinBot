const express = require("express");
const todoRouter = express.Router();
const sqlite3 = require("sqlite3");
const createError = require("http-errors");
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
  const todo = req.body.todo;
  if (!todo) {
    return next(createError(400, "Missing todo in request."));
  }
  if (todo.length === 0) {
    return next(createError(400, "Todo is empty."));
  }
  try {
    db.run(`INSERT INTO Todo (name) VALUES ("${todo}")`);
    res.status(201).send(req.body);
  } catch (err) {
    res.status(500).send(err);
  }
});

todoRouter.delete("/", (req, res, next) => {
  try {
    db.run(`DELETE FROM Todo WHERE name="${req.body.todo}"`);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = todoRouter;
