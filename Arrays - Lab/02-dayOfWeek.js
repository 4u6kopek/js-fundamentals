function daysOfWeek(dayNumber) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  const result = days[dayNumber - 1];
  if (result != undefined) {
    console.log(result);
  } else {
    console.log("Invalid day!");
  }
}
daysOfWeek(4);
