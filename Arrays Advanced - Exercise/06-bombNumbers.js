function bombNumbers(sequence, bombInfo) {
    let bombNumber = bombInfo[0];
    let bombPower = bombInfo[1];

    let index = sequence.indexOf(bombNumber);

    while (index !== -1) {
        let start = Math.max(0, index - bombPower);
        let end = Math.min(sequence.length - 1, index + bombPower);

        sequence.splice(start, end - start + 1);

        index = sequence.indexOf(bombNumber);
    }

    let sum = sequence.reduce((acc, num) => acc + num, 0);
    return sum;
}

// Example usage:
let sequence = [1, 2, 2, 4, 2, 2, 2, 9];
let bombInfo = [4, 2];
console.log(bombNumbers(sequence, bombInfo)); // Output: 12

// sequence = [1, 4, 4, 2, 8, 9, 1];
// bombInfo = [9, 3];
// console.log(bombNumbers(sequence, bombInfo)); // Output: 5
