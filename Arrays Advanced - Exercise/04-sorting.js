function sorting(arr) {
    arr.sort((a, b) => a - b);

    let result = [];
    while (arr.length) {
        result.push(arr.pop());

        if (arr.length) {
            result.push(arr.shift());
        }
    }

    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
