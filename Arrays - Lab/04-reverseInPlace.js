function reversedInPlace(arr) {
  let length = arr.length;
  let reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  while (arr.length > 0) {
    arr.pop();
  }

  for (let i = 0; i < length; i++) {
    arr.push(reversedArr[i]);
  }

  console.log(arr.join(" "));
}

reversedInPlace(["abc", "def", "hig", "klm", "nop"]);
