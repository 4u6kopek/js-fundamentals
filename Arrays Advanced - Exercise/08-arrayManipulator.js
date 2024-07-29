function manageArray(array, commands) {
    function add(index, element) {
        array.splice(index, 0, element);
    }

    function addMany(index, ...elements) {
        array.splice(index, 0, ...elements);
    }

    function contains(element) {
        const index = array.indexOf(element);
        console.log(index);
    }

    function remove(index) {
        if (index >= 0 && index < array.length) {
            array.splice(index, 1);
        }
    }

    function shift(positions) {
        positions = positions % array.length;
        const removed = array.splice(0, positions);
        array.push(...removed);
    }

    function sumPairs() {
        const result = [];
        for (let i = 0; i < array.length; i += 2) {
            if (i + 1 < array.length) {
                result.push(array[i] + array[i + 1]);
            } else {
                result.push(array[i]);
            }
        }
        array = result;
    }

    for (const command of commands) {
        const parts = command.split(' ');
        const cmd = parts[0];

        switch (cmd) {
            case 'add':
                add(Number(parts[1]), Number(parts[2]));
                break;
            case 'addMany':
                addMany(Number(parts[1]), ...parts.slice(2).map(Number));
                break;
            case 'contains':
                contains(Number(parts[1]));
                break;
            case 'remove':
                remove(Number(parts[1]));
                break;
            case 'shift':
                shift(Number(parts[1]));
                break;
            case 'sumPairs':
                sumPairs();
                break;
            case 'print':
                console.log(`[ ${array.join(', ')} ]`);
                return;
        }
    }
}

manageArray(
    [1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']); // Output: [ 3, 10, 17, 7 ]
