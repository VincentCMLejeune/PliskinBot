const iterateYear = require("./calendar");

const year = 2020;
const callback = (day) => {
  console.log(day);
};
iterateYear(year, callback);
