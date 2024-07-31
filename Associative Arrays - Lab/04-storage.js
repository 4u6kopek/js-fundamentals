function storage(input) {
    const inventory = new Map();

    input.forEach(itemData => {
        let [item, quantity] = itemData.split(' ');
        quantity = Number(quantity);

        if (inventory.has(item)) {
            inventory.set(item, inventory.get(item) + quantity);
        } else {
            inventory.set(item, quantity);
        }
    });

    inventory.forEach((quantity, item) => {
        console.log(`${item} -> ${quantity}`);
    });
}

let input = ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'];

storage(input);
