function smallestOfThreeNumbers(num1, num2, num3) {
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}
smallestOfThreeNumbers(2, 5, 3);
