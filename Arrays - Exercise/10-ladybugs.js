function ladybugs(input) {
    const fieldSize = Number(input.shift());
    const ladybugsInitialPositions = input.shift().split(' ').map(Number);
    const commands = input;

    const field = new Array(fieldSize).fill(0);

    for (const position of ladybugsInitialPositions) {
        if (position >= 0 && position < fieldSize) {
            field[position] = 1;
        }
    }

    for (const command of commands) {
        let [index, direction, flyLength] = command.split(' ');
        index = Number(index);
        flyLength = Number(flyLength);

        if (index < 0 || index >= fieldSize || field[index] === 0) {
            continue;
        }

        field[index] = 0;
        let newIndex = index;

        while (true) {
            if (direction === 'right') {
                newIndex += flyLength;
            } else if (direction === 'left') {
                newIndex -= flyLength;
            }

            if (newIndex < 0 || newIndex >= fieldSize) {
                break;
            }

            if (field[newIndex] === 0) {
                field[newIndex] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1']);
