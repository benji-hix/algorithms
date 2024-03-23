//* Given a string that contains a list of weights in integer format.
//* sort the list based on the sum of each entry's digits.
//* For tied sums, sort based on alphabetical order of the string version of integer.

function weightSort(a, b) {
    function addDigits(str) {
        return str.split('').reduce((prev, current) => {
            return parseInt(prev) + parseInt(current);
        }, 0); //! init value important for === below
    }
    const aDigits = addDigits(a);
    const bDigits = addDigits(b);
    return aDigits === bDigits ? a.localeCompare(b) : aDigits - bDigits;
}

function orderWeight(str) {
    return str.split(' ').sort(weightSort).join(' ');
}

const testStr = '56 65 74 100 99 68 86 180 90';
const testStr2 = '1 200 2 4 4 6 6 7 7 9 18 27 72 81 91';

console.log(orderWeight(testStr2));
