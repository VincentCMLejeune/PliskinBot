const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../db.sqlite");

db.serialize(function () {
  db.run("DROP TABLE Stellaris");
  db.run("CREATE TABLE IF NOT EXISTS Stellaris (id TEXT PRIMARY KEY, name TEXT, desc TEXT, area TEXT, tier INTEGER, prereq TEXT DEFAULT NULL, potential TEXT DEFAULT NULL)");
//   db.run("INSERT INTO Stellaris (id, area, tier) VALUES (?, ?, ?)", ['tech_adaptive_combat_algorithms', "society", 2]);
//   db.run("INSERT INTO Stellaris (id, area, tier, prereq) VALUES (?, ?, ?, ?)", ['tech_biomechanics', "society", 4, 'tech_adaptive_combat_algorithms']);
  db.each("SELECT * FROM Stellaris", function (err, row) {
    console.log(row);
  });
});

db.close();