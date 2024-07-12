function revealWords(wordsStr, text) {
    const wordsToFill = wordsStr.split(', ');
    const textWords = text.split(' ');

    for (let i = 0; i < textWords.length; i++) {
        if (textWords[i].includes('*')) {
            const wordToFill = wordsToFill.find(word => word.length === textWords[i].length);
            if (wordToFill) {
                textWords[i] = wordToFill;
            }
        }
    }

    console.log(textWords.join(' '));
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
