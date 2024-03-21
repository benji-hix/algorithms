//* create functions to write calculations as follows:
/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
*/
//* Include a function for each number from 0 to 9
//* Include a function for each of the following: plus, minus, times, dividedBy
//* Each calculation consists of exactly one operation and two numbers
//* Division should be integer division: 8 / 3 should return 2

function operate (arr, int) {
    switch (arr[0]) {
        case '-': {
            return int - arr[1];
        }
        case '+': {
            return int + arr[1];
        }
        case '/': {
            return Math.floor(int / arr[1]);
        }
        case '*': {
            return int * arr[1];
        }
    }
}

function zero(n) {
    if (typeof n === 'undefined') {
        return 0;
    }
    else {
        return operate(n, 0);
    }
}
function one(n) {
    if (typeof n === 'undefined') {
        return 1;
    }
    else {
        return operate(n, 1);
    }
}
function two(n) {
    if (typeof n === 'undefined') {
        return 2;
    }
    else {
        return operate(n, 2);
    }
}
function three(n) {
    if (typeof n === 'undefined') {
        return 3;
    }
    else {
        return operate(n, 3);
    }
}
function four(n) {
    if (typeof n === 'undefined') {
        return 4;
    }
    else {
        return operate(n, 4);
    }
}
function five(n) {
    if (typeof n === 'undefined') {
        return 5;
    }
    else {
        return operate(n, 5);
    }
}
function six(n) {
    if (typeof n === 'undefined') {
        return 6;
    }
    else {
        return operate(n, 6);
    }
}
function seven(n) {
    if (typeof n === 'undefined') {
        return 7;
    }
    else {
        return operate(n, 7);
    }
}
function eight(n) {
    if (typeof n === 'undefined') {
        return 8;
    }
    else {
        return operate(n, 8);
    }
}
function nine(n) {
    if (typeof n === 'undefined') {
        return 9;
    }
    else {
        return operate(n, 9);
    }
}

function plus(int) {
    return ['+', int];
}
function minus(int) {
    return ['-', int];
}
function times(int) {
    return ['*', int];
}
function dividedBy(int) {
    return ['/', int];
}

