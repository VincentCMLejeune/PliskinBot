// This route is read-only, to fetch (and update) the tech trees from common files
// and deliver them in object forms to the front-end

const path = require("path");
const fs = require("fs");

// TODO : ADD POTENTIAL
const parseTechs = () => {
  fs.readdir("../assets/stellaris/technology", (err, files) => {
    const techs = {};
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
            // console.log(techName)
          } else if (tests[i][0] === "}") {
            // console.log(techName);
            // console.log(curTech);
            curTech.key = techName;
            techs[techName] = curTech;
            curTech = {};
          } else {
            let splitedLine = tests[i].trim().split(" = ");
            if (splitedLine[0] === "area" && !curTech.area) {
              curTech.area = splitedLine[1];
            } else if (splitedLine[0] === "tier" && !curTech.tier) {
              curTech.tier = splitedLine[1];
            } else if (
              splitedLine[0] === "prerequisites" &&
              !curTech.prerequisites
            ) {
              curTech.prerequisites = splitedLine[1]
                .split(" ")
                .slice(1, -1)
                .map((tech) => tech.substring(1, tech.length - 1));
            }
          }
        }
      });
    console.log(techs);
  });
};

parseTechs();

module.exports = parseTechs;
