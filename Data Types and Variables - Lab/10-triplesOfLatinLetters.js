function triplesOfLatinLetters(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        const firstLetter = String.fromCharCode(97 + i);
        const secondLetter = String.fromCharCode(97 + j);
        const thirdLetter = String.fromCharCode(97 + k);
        console.log(firstLetter + secondLetter + thirdLetter);
      }
    }
  }
}
triplesOfLatinLetters(3);
