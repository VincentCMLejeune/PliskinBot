const parseTechs = require("../stellaris/techsParser");

async function printTechs() {
  const techs = await parseTechs();
  return techs;
}

printTechs().then((value) => {
    console.log(value)
});
// console.log(techs);
