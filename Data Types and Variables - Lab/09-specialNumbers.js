function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let num = i;
    let specialNum = 0;

    while (num > 0) {
      specialNum += num % 10;
      num = Math.floor(num / 10);
    }

    if (specialNum === 7 || specialNum === 5 || specialNum === 11) {
      console.log(`${i} -> True`);
    } else {
      console.log(`${i} -> False`);
    }
  }
}

specialNumbers(15);
