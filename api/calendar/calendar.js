const iterateYear = (year) => {
  const firstJanuary = new Date(year, 0, 1);
  console.log(firstJanuary);
  for (let i = 1; i < 365; i++) {
    const newDate = new Date(
      firstJanuary.getFullYear(),
      firstJanuary.getMonth(),
      firstJanuary.getDate() + i
    );
    console.log(newDate);
  }
};
