function train(input) {
    let wagons = input[0].split(' ').map(Number);
    const maxCapacity = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        const command = input[i];

        if (command.startsWith('Add')) {
            const passengers = Number(command.split(' ')[1]);
            wagons.push(passengers);
        } else {
            const passengers = Number(command);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= maxCapacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
