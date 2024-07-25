function addAndSubstract(arr) {
    let sum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
    }
    for (const num of arr) {
        newSum += num;
    }
    console.log(arr);
    console.log(sum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);