const path = require("path");
const fs = require("fs");

const parseNames = () => {
  const names = fs
    .readFileSync("../assets/stellaris/locales/technology_l_english.yml")
    .toString()
    .trim()
    .split("\n");
  console.log(names);
};

parseNames();
