function oddAndEvenSum(number) {
    let stringNum = number + '';
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < stringNum.length; i++) {
        let num = Number(stringNum[i]);
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);