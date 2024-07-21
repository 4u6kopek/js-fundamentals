function sumEvenNumbers(arr) {
    let totalSum = 0;
    for (const stringNum of arr) {
        let num = Number(stringNum);
        if (num % 2 === 0) {
            totalSum += num;
        }
    }
    console.log(totalSum);
}
sumEvenNumbers(['1', '2', '3', '4', '5', '6']);