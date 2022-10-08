const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../db.sqlite");

const iterateYear = require("./calendar");

const year = 2022;
const callback = (day) => {
  console.log(day);
  // db.run(`INSERT INTO Calendar (date, day, dayOfWeek, month, year) VALUES (${day.date}, ${day.day}, ${day.dayOfWeek} ${day.month}, ${day.year})`);
};

db.serialize(function () {
  db.run(
    "CREATE TABLE IF NOT EXISTS Calendar (id INTEGER PRIMARY KEY, date TEXT, day INTEGER, dayOfWeek INTEGER, month INTEGER, year INTEGER, occupation TEXT DEFAULT 'free')"
  );
  iterateYear(year, callback);
});

// db.each("SELECT * FROM Calendar", function (err, row) {
//   console.log(row);
// });
