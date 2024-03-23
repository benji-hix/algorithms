//* Given a string that contains a list of weights in integer format.
//* sort the list based on the sum of each entry's digits.
//* For tied sums, sort based on alphabetical order of the string version of integer.

function addDigits(str) {
   return str.split('').reduce( (prev, current) => {
        return parseInt(prev) + parseInt(current);
   })
}

function stringSort(strA, strB) {
    return ([strA, strB].sort()[0] == strA) ? -1 : 1;
}

function weightSort(a, b) {
    if (addDigits(a) < addDigits(b)) {
        return -1
    }
    else if (addDigits(a) > addDigits(b)) {
        return 1
    }
    else {
        return stringSort(a, b)
    }
}

function orderWeight(str) {
    return str.split(' ').sort(weightSort).join(' ');
}

const testStr = "56 65 74 100 99 68 86 180 90"

console.log(orderWeight(testStr));