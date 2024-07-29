function processArrays(array1, array2) {
    let [takeCount, deleteCount, searchNumber] = array2;

    let takenElements = array1.slice(0, takeCount);

    let remainingElements = takenElements.slice(deleteCount);

    let count = remainingElements.filter(num => num === searchNumber).length;

    console.log(`Number ${searchNumber} occurs ${count} times.`);
}

let array1 = [5, 2, 3, 4, 1, 6];
let array2 = [5, 2, 3];
processArrays(array1, array2);
