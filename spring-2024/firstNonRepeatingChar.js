//* Write a function that, given a string input,
//* returns the first character that is not repeated
//* anywhere in the string.
//* Upper and Lower case letters are considered the same character,
//* but the function should return the original case for the correct letter.
//* If a string contains all repeating characters, return empty string ''

function firstNonRepeatingLetter(str) {
    for (const char of str) {
        let regexStr = new RegExp(`${char}`, 'gi');
        if (str.match(regexStr).length === 1) {
            return char
        }
    }
    return '';
}

console.log(firstNonRepeatingLetter("s.TRests"));