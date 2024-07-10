function substrings(str, startIndex, count) {
    const result = str.substring(startIndex, startIndex + count);
    console.log(result);
}
substrings('ASentence', 1, 8);
substrings('SkipWord', 4, 7);