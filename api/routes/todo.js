const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database('./db.sqlite');


router.get("/", (req, res, next) => {
  db.all('SELECT * FROM Todo', (err, rows) => {
    if (err) {
        console.log(err)
      res.sendStatus(500);
    } else {
      res.send({ todos: rows });
    }
  });
});

module.exports = router;
