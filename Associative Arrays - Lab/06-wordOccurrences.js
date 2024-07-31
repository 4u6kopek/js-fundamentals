function wordOccurrences(input) {
    const wordCount = new Map();

    input.forEach(word => {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    });

    const sortedWords = Array.from(wordCount.entries()).sort((a, b) => b[1] - a[1]);

    sortedWords.forEach(([word, count]) => {
        console.log(`${word} -> ${count} times`);
    });
}

let input = [
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"
];

wordOccurrences(input);
