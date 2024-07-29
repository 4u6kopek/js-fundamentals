function distinctArray(input) {
    let numbers = input;

    let uniqueNumbers = [...new Set(numbers)];

    console.log(uniqueNumbers.join(' '));
}

distinctArray([1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9]);
