// This route is read-only, to fetch (and update) the tech trees from common files
// and deliver them in object forms to the front-end

// Parsing data
const path = require("path");
const fs = require("fs");

const techs = {};
let curTech = {};
let techName = "";
fs.readdir("../assets/stellaris/technology", (err, files) => {
  if (err) {
    throw err;
  }
  files
    .filter((file) => file[0] === "0")
    .forEach((file) => {
      const tests = fs
        .readFileSync(path.join("../assets/stellaris/technology", file), "utf8")
        .toString()
        .trim()
        .split("\n");

      // for (line of tests) {
      //   console.log(line);
      // }

      for (let i = 0; i < tests.length; i++) {
        if (tests[i][0] === "t") {
          techName = tests[i].split(" = {")[0];
          // console.log(techName)
        } else if (tests[i][0] === "}") {
          console.log(techName)
          console.log(curTech)
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
            curTech.prerequisites = splitedLine[1];
          }
        }
      }
    });
});

console.log(techs);
