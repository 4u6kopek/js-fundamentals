function spiceMustFlow(yield) {
  let totalExtraction = 0;
  let dayCount = 0;

  while (yield >= 100) {
    totalExtraction += yield;
    yield -= 10;
    totalExtraction -= 26;
    dayCount++;
  }

  if (totalExtraction >= 26) {
    totalExtraction -= 26;
  }

  console.log(dayCount);
  console.log(totalExtraction);
}
// spiceMustFlow(111);
spiceMustFlow(450);
