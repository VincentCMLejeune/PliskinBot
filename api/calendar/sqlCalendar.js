const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../db.sqlite");

const iterateYear = require("./calendar");

const year = 2022;
const callback = (day) => {
  // console.log(`INSERT INTO Calendar (date, day, dayOfWeek, month, year) VALUES ('${day.date}', ${day.day}, ${day.dayOfWeek}, ${day.month}, ${day.year})`);
  db.run(
    `INSERT INTO Calendar (date, day, dayOfWeek, month, year) VALUES ('${day.date}', ${day.day}, ${day.dayOfWeek}, ${day.month}, ${day.year})`
  );
};

iterateYear(year, callback);

// Print all data from the table
// db.each("SELECT * FROM Calendar", function (err, row) {
//   console.log(row);
// });

// Create the table
// db.run("CREATE TABLE IF NOT EXISTS Calendar (id INTEGER PRIMARY KEY, date TEXT, day INTEGER, dayOfWeek INTEGER, month INTEGER, year INTEGER, occupation TEXT DEFAULT 'free')");

// Delete the table
// db.run("DROP TABLE Calendar");

// Remove all data from the table
// db.run("DELETE FROM Calendar")
