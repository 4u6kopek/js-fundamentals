function dungeonAdventure(input) {
    let rooms = input[0].split('|');
    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let [item, value] = rooms[i].split(' ');
        value = Number(value);

        if (item === 'potion') {
            let healedAmount = Math.min(100 - health, value);
            health += healedAmount;
            console.log(`You healed for ${healedAmount} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (item === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            } else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }

    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonAdventure(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
