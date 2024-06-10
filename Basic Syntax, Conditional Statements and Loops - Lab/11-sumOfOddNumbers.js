function sumOfOddNumbers(totalNumbers) {
  let count = 0;
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      sum += i;
      console.log(i);
      count++;
      if (count >= totalNumbers) {
        break;
      }
    }
  }
  console.log(`Sum: ${sum}`);
}
//sumOfOddNumbers(5);
sumOfOddNumbers(3);
