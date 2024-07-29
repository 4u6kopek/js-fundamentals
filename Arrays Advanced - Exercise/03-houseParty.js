function houseParty(guestActions) {
    let guestList = [];

    for (let action of guestActions) {
        let parts = action.split(' ');
        let name = parts[0];
        let isGoing = parts[2] === "going!";

        if (isGoing) {
            if (guestList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestList.push(name);
            }
        } else {
            if (guestList.includes(name)) {
                guestList = guestList.filter(guest => guest !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    guestList.forEach(guest => console.log(guest));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);
