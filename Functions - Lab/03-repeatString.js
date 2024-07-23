function repeatStrings(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
repeatStrings("abc", 3);
repeatStrings("String", 2);
