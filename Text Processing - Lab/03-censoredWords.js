function censoredWords(text, word) {
    let result = text;
    const censoredWord = '*'.repeat(word.length);
    while (result.includes(word)) {
        result = result.replace(word, censoredWord);
    }
    console.log(result);
}

censoredWords('A small sentence with some words', 'small');
