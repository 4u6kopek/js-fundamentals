function printSum(start, end) {
    let sum = 0;
    let allNums = '';
    for (let i = start; i <= end; i++){
        sum +=i;
        allNums += i + ' ';
    }
    console.log(allNums);
    console.log(`Sum: ${sum}`);
}
//printSum(5,10);
//printSum(0,26);
printSum(50,60);