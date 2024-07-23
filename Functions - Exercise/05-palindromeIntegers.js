function palindromeInts(arr) {
  function checkIfPalindrome(num) {
    const numString = num + "";
    let numStringReversed = "";

    for (let i = numString.length - 1; i >= 0; i--) {
      let curChar = numString[i];
      numStringReversed += curChar; // Correctly append to numStringReversed
    }
    return numStringReversed === numString;
  }

  for (const num of arr) {
    const isPalindrome = checkIfPalindrome(num);
    console.log(isPalindrome);
  }
}
//palindromeInts([123, 323, 421, 121]);
palindromeInts([32,2,232,1010]);
