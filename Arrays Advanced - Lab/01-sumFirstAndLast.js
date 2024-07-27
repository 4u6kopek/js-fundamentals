function sumFristAndLastNum(arr) {
  if (arr.length === 1) {
    console.log(Number(arr[0]) + Number(arr[0]));
    return;
  }
  const firstNum = Number(arr.shift());
  const lastNum = Number(arr.pop());

  console.log(firstNum + lastNum);
}
sumFristAndLastNum(["5"]);
sumFristAndLastNum(["5", "10"]);
