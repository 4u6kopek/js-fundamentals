function negativeOrPositiveNum(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element >= 0) {
      result.push(element); //push -> add from end
    } else {
      result.unshift(element); //unshift -> add from beggining
    }
  }
  console.log(result.join("\n"));
}
negativeOrPositiveNum([7, -2, 8, 9]);
//negativeOrPositiveNum([3, -2, 0, -1]);
