function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
let expenses = 0;
let shieldBreakCounts = 0;
    for(let curLostFight = 1; curLostFight <= lostFights; curLostFight++){
        if(curLostFight % 2 === 0) {
            expenses += helmetPrice;
        } 
        if(curLostFight %3 === 0) {
            expenses += swordPrice;
        }
        if(curLostFight %2 === 0 && curLostFight % 3 === 0){
            expenses += shieldPrice;
            shieldBreakCounts++;

            if(shieldBreakCounts % 2 === 0){
                expenses += armorPrice;
            }
        }
    }
console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(7, 2, 3, 4, 5);
