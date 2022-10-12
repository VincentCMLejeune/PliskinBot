const path = require("path");
const fs = require("fs");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../db.sqlite");

// TODO : find the source files for all techs (some are missing)
const parseNames = () => {
  const names = fs
    .readFileSync("../assets/stellaris/locales/technology_l_english.yml")
    .toString()
    .trim()
    .split("\n");
  const parsedNames = {};
  let curName = {};
  let nameKey = "";
  for (let i = 0; i < names.length; i++) {
    let name = names[i].trim();
    if (name.includes("_effect:")) {
      continue;
    } else if (name.includes("_desc")) {
      const desc = name.split('"')[1];
      if (desc !== "" && curName.title) {
        curName.desc = desc;
        parsedNames[nameKey] = curName;
        db.run(
          "UPDATE Stellaris SET desc = ?, name = ? WHERE id = ?",
          [curName.desc, curName.title, nameKey],
          function (err) {
            if (err) {
              console.log(err);
            }
          }
        );
        curName = {};
        nameKey = "";
      }
    } else if (name.substring(0, 5) === "tech_") {
      nameKey = name.split(":")[0];
      const title = name.split('"')[1];
      if (title !== "Hidden") {
        curName.title = title;
      }
    }
  }
};

parseNames();
