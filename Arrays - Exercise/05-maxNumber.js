function maxNumbers(arr) {
  let topNums = [];
  for (let i = 0; i < arr.length; i++) {
    let num1 = Number(arr[i]);
    let isTop = true;
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = Number(arr[j]);
      if (num1 <= num2) {
        isTop = false;
        break;
      }
    }
    if (isTop) {
      topNums.push(num1);
    }
  }
  console.log(topNums.join(" "));
}

maxNumbers([1, 4, 3, 2]);
