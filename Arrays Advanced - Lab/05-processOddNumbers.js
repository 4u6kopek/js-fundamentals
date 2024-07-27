function processOddNumbers(arr) {
    let transitArr = [];
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            arr[i] = arr[i] * 2;
            transitArr.push(arr[i]);
        }
    }
    for (let i = transitArr.length - 1; i >= 0; i--) {
        resultArr.push(transitArr[i]);
    }
    console.log(resultArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);