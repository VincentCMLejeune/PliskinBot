const iterateYear = (year, callback) => {
  const firstJanuary = new Date(year, 0, 1);
  const numDays = year % 4 === 0 ? 366 : 365;
  for (let i = 0; i < numDays; i++) {
    const newDate = new Date(
      firstJanuary.getFullYear(),
      firstJanuary.getMonth(),
      firstJanuary.getDate() + i
    );
    const day = {
      date: newDate,
      day: newDate.getDate(),
      dayOfWeek: newDate.getDay(),
      month: newDate.getMonth(),
      year: newDate.getFullYear(),
    };
    callback(day);
  }
};

module.exports = iterateYear;
