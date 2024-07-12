function modernTimesOfHash(text) {
    const words = text.split(' ');
    const pattern = /^[A-Za-z]+$/;

    const hashWords = words.filter(word => word.startsWith('#') && word.length > 1);

    for (let hashtag of hashWords) {
        let word = hashtag.substring(1); // first index to end

        if (pattern.test(word)) {
            console.log(word);
        }
    }
}
modernTimesOfHash('Nowadays everyone uses # to tag a #special word in #socialMedia');
