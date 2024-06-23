function requiredReading(pages, pagesPerHour, timeLimit) {
  let totalTimeToRead = Number(pages / pagesPerHour);
  let hoursPerDay = Number(totalTimeToRead / timeLimit);

  console.log(hoursPerDay);
}
requiredReading(212, 20, 2);
