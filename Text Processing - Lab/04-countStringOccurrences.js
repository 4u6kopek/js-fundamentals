function countStringOccurrences(text, wordTOCount) {
    let words = text.split(' ');
    let count = 0;
    for (const word of words) {
        if (word === wordTOCount) {
            count++;
        }
    }
    console.log(count);
}
countStringOccurrences('This is a word and it also is a sentence', 'is');