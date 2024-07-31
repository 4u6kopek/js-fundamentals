function phoneBook(input) {
    const phonebook = {}
    for (const personDetails of input) {
        const detailsArray = personDetails.split(" ");
        const name = detailsArray[0];
        const number = detailsArray[1];
        phonebook[name] = number;
    }
    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }
}
phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344']);