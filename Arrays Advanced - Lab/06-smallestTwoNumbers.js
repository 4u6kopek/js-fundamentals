function smallestTwoNumbers(arr) {
    let resultArr = [];
    const min = Math.min(...arr);
    resultArr.push(min);

    const indexToRemove = arr.indexOf(min);
    arr.splice(indexToRemove, 1);

    const min2 = Math.min(...arr);
    resultArr.push(min2);

    console.log(resultArr.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5]);
