const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("../db.sqlite");

// As an example, the function ran to delete and create the table Fitness (must be run once through Node)
db.serialize(function () {
//   db.run("DROP TABLE Fitness");
//   db.run("CREATE TABLE IF NOT EXISTS Fitness (id INTEGER PRIMARY KEY, muscle TEXT, localization TEXT, weight FLOAT)");
//   db.run("INSERT INTO Fitness (muscle, localization, weight) VALUES ('Biceps (dumbbell)', 'upper', 10)");
//   db.run("INSERT INTO Fitness (muscle, localization, weight) VALUES ('Triceps (machine)', 'upper', 10)");
//   db.run("INSERT INTO Fitness (muscle, localization, weight) VALUES ('Leg-press', 'lower', 95)");
  db.each("SELECT id, muscle FROM Fitness", function (err, row) {
    console.log(row.id + ": " + row.muscle);
  });
});

db.close();
