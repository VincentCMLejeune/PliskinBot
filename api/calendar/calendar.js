const iterateYear = (year) => {
  const firstJanuary = new Date(year, 0, 1);
  const numDays = year % 4 === 0 ? 366 : 365;
  for (let i = 0; i < numDays; i++) {
    const newDate = new Date(
      firstJanuary.getFullYear(),
      firstJanuary.getMonth(),
      firstJanuary.getDate() + i
    );
    console.log(newDate);
  }
};

module.exports = { iterateYear };
