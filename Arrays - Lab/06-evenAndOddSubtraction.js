function evenAndOddSubtraction(arr) {
    let sumOfEvenNums = 0;
    let sumOfOddNums = 0;
    for (const stringNum of arr) {
        let num = Number(stringNum);
        if (num % 2 === 0) {
            sumOfEvenNums += num;
        } else {
            sumOfOddNums += num;
        }
    }
    console.log(sumOfEvenNums - sumOfOddNums);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);