function reverseArray(numOfElements, arr) {
    let reversedArr = [];
  for (let i = numOfElements - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  console.log(reversedArr.join(' '));
}
reverseArray(4, [-1, 20, 99, 5]);
