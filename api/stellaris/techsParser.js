// It works, but it reads twice "tech_space_cloud_weapon_1", which appears only once in the techs txt

const path = require("path");
const fs = require("fs");
const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("../db.sqlite");

// TODO : ADD POTENTIAL
const parseTechs = () => {
  fs.readdir("../assets/stellaris/technology", (err, files) => {
    let curTech = {};
    let techName = "";
    if (err) {
      throw err;
    }
    files
      .filter((file) => file[0] === "0")
      .forEach((file) => {
        const tests = fs
          .readFileSync(
            path.join("../assets/stellaris/technology", file),
            "utf8"
          )
          .toString()
          .trim()
          .split("\n");

        for (let i = 0; i < tests.length; i++) {
          if (tests[i][0] === "t") {
            techName = tests[i].split(" = {")[0];
          } else if (tests[i][0] === "}") {
            curTech.key = techName;
            if (!curTech.prerequisites) {
              curTech.prerequisites = null;
            }
            db.run(
              "INSERT INTO Stellaris (id, area, tier, prereq) VALUES (?, ?, ?, ?)",
              [curTech.key, curTech.area, curTech.tier, curTech.prerequisites]
            );
            curTech = {};
          } else {
            let splitedLine = tests[i].trim().split(" = ");
            if (splitedLine[0] === "area" && !curTech.area) {
              curTech.area = splitedLine[1];
            } else if (splitedLine[0] === "tier" && !curTech.tier) {
              curTech.tier = Number(splitedLine[1]);
            } else if (
              splitedLine[0] === "prerequisites" &&
              !curTech.prerequisites
            ) {
              curTech.prerequisites = splitedLine[1]
                .split(" ")
                .slice(1, -1)
                .map((tech) => tech.substring(1, tech.length - 1))
                .join("&");
            }
          }
        }
      });
  });
};

parseTechs();
