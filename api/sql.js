const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./db.sqlite");

// As an example, the function ran to create the table Todo (must be run once through Node)
// db.serialize(function () {
//   db.run("CREATE TABLE IF NOT EXISTS Todo (id INTEGER PRIMARY KEY, name TEXT)");
//   db.run("INSERT INTO Todo (name) VALUES ('Create database')");
//   db.run("INSERT INTO Todo (name) VALUES ('Connect database')");
//   db.run("INSERT INTO Todo (name) VALUES ('Sleep')");
//   db.each("SELECT id, name FROM Todo", function (err, row) {
//     console.log(row.id + ": " + row.name);
//   });
// });

db.close();
