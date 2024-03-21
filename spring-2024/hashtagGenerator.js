//* Write a function that generates hashtags according to specific rules
//* All words must have first letter capitalized
//* If final result is longer than 140 char, return false
//* If input or result returns empty string, return false

function toTitleCase(str) {
    return str.replace(/\b\w+/, (str) => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
    })
}

function generateHashtag(str) {
    if (!str.match(/[a-zA-Z0-9]/) || (str.match(/[a-zA-Z0-9]/g).length > 140)) {
        return false;
    }
    
    let hashtag =  '#' + str.match(/\b\S+\b/g).map((str) => toTitleCase(str)).join('');
    // if (hashtag.length > 140) return false;
    return hashtag;
}

console.log(generateHashtag('Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'));
console.log(generateHashtag('yOu arE lIKE A RAT'));