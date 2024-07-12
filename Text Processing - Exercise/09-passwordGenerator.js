function passwordGenerator(arr) {
    const [str1, str2, replacementStr] = arr;
    let password = str1 + str2;
    let replacementIndex = 0;

    const vowels = 'aeiou';
    let passwordArray = password.split('');

    for (let i = 0; i < passwordArray.length; i++) {
        const char = passwordArray[i];

        if (vowels.includes(char)) {
            const replacementChar = replacementStr[replacementIndex].toUpperCase();
            passwordArray[i] = replacementChar;
            replacementIndex++;

            if (replacementIndex === replacementStr.length) {
                replacementIndex = 0;
            }
        }
    }
    const reversedPassword = passwordArray.join('').split('').reverse().join('');
    console.log(`Your generated password is ${reversedPassword}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
