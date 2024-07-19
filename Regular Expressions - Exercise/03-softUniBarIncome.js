function softUniBarIncome(arr) {
    const regex = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+\.?\d+)\$/;

    let total = 0;

    for (let line of arr) {
        if (line === 'end of shift') break;

        let match = regex.exec(line);

        if (match) {
            const { customer, product, count, price } = match.groups;
            const currentTotal = Number(count) * Number(price);
            total += currentTotal;

            console.log(`${customer}: ${product} - ${currentTotal.toFixed(2)}`);
        }
    }

    console.log(`Total income: ${total.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift']);