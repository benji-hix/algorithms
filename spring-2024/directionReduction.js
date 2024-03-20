//* Write a function dirReduc which will take an array 
//* of strings and returns an array of strings with the 
//* needless directions removed (W<->E or S<->N side by side).


//~ solution not utilizing built-in methods 
function dirReduc(arr) {
    const reducedArr = [arr[0]];
    const compass = {
        "north" : 1,
        "south" : -1,
        "east" : 2,
        "west" : -2
    };

    for ( let i = 1; i < arr.length; i++) {
        if (reducedArr.length) {

            let priorDirection = compass[reducedArr[reducedArr.length-1].toLowerCase()];
            reducedArr.push(arr[i])
            let currentDirection = compass[arr[i].toLowerCase()];
            if (priorDirection + currentDirection == 0) {
                reducedArr.pop();
                reducedArr.pop();
            }
        }
        else {
            reducedArr.push(arr[i]);
        }
    }
    return reducedArr;
}

const testArr1 = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

console.log(dirReduc(testArr1));