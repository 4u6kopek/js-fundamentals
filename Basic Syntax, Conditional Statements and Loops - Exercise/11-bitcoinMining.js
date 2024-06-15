function btc(arr) {
    let bitcoinCount = 0;
    let firstBitcoinDay = 0;
    let totalMoney = 0;
    let curDay = 1;

    for(let i = 0; i < arr.length; i++) {
        let gold = Number(arr[i]);

        if(curDay % 3 === 0) {
            gold *= 0.7;
        }

        let moneyFromGOld = gold * 67.51;
        
        totalMoney += moneyFromGOld;
        while (totalMoney >= 11949.16){
            if(bitcoinCount === 0){
            firstBitcoinDay = curDay;
            }

            bitcoinCount++;
            totalMoney -= 11949.16;
        }
        curDay++;
    }
    
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    if (bitcoinCount > 0) {   
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
btc([100, 200, 300]);