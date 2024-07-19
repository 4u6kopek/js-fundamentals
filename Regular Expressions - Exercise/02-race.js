function race(arr) {
    let names = arr.shift().split(', ');
    let results = {};

    names.forEach(name => results[name] = 0);

    let command = arr.shift();
    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    while (command !== 'end of race') {
        let letterMatch = command.match(letterPattern);
        let digitMatch = command.match(digitPattern);

        if (letterMatch && digitMatch) {
            let name = letterMatch.join('');
            let distance = digitMatch.map(Number).reduce((a, b) => a + b, 0);

            if (results.hasOwnProperty(name)) {
                results[name] += distance;
            }
        }

        command = arr.shift();
    }

    let sortedResults = Object.entries(results).sort((a, b) => b[1] - a[1]);

    console.log('1st place: ' + sortedResults[0][0]);
    console.log('2nd place: ' + sortedResults[1][0]);
    console.log('3rd place: ' + sortedResults[2][0]);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);
