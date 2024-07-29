function gladiatorInventory(commands) {
    let inventory = commands[0].split(' ');

    for (let i = 1; i < commands.length; i++) {
        const command = commands[i].split(' ');
        const action = command[0];
        const equipment = command[1];

        switch (action) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                const indexToTrash = inventory.indexOf(equipment);
                if (indexToTrash !== -1) {
                    inventory.splice(indexToTrash, 1);
                }
                break;
            case 'Repair':
                const indexToRepair = inventory.indexOf(equipment);
                if (indexToRepair !== -1) {
                    inventory.splice(indexToRepair, 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                const [equip, upgrade] = equipment.split('-');
                const indexToUpgrade = inventory.indexOf(equip);
                if (indexToUpgrade !== -1) {
                    inventory.splice(indexToUpgrade + 1, 0, `${equip}:${upgrade}`);
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}

const commands = ['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
    ;

gladiatorInventory(commands);
