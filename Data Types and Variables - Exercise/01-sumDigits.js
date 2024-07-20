function sumDigits(number) {
  let stringedNumber = `${number}`;
  let sum = 0;
  for (let i = 0; i < stringedNumber.length; i++) {
    sum += Number(stringedNumber[i]);
  }
  console.log(sum);
}
sumDigits(97561);
