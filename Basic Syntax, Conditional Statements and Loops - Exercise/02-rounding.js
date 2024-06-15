function rounding(num, precision) {
    if (precision > 15) {
        precision = 15;
    }
    let roundedNum = num.toFixed(precision);
    roundedNum = parseFloat(roundedNum);
    console.log(roundedNum);

}
rounding(3.1415926535897932384626433832795,19);
rounding(10.5,3);