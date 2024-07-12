function stringSubstrings(word, text) {
    const lowerCaseText = text.toLowerCase();
    const textWords = lowerCaseText.split(' ');

    if (textWords.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstrings('javascript', 'JavaScript is the best programming language');