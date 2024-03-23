//* Given an array of integers and a goal sum integer,
//* return the earliest instance of two integers that
//* add together to equal sum.
//* Base "earliest" on the second integer in pair.


//~ First failed attempt
// function sumPairs(ints, s) {
//     const cache = {}
//     for (let index = 0; index < ints.length; index++) {
//         let solution = s - ints[index];
//         console.log(solution);
//         let solutionIndex = (ints.slice(index).indexOf(solution)) + (index);
//         console.log(solutionIndex);
//         if (solutionIndex < 0) {
//             continue;
//         } 
//         cache[solutionIndex] = (index);
//     }
//     if (cache == {}) {
//         return undefined;
//     }
//     console.log(Object.entries(cache));
//     return [parseInt(Object.keys(cache)[0]), ints[cache[Object.keys(cache)[0]]]]
// }


//~ Second attempt using sets 

function sumPairs (ints, s) {
    let seen = new Set();
    for (const item of ints) {
        if (seen.has(item)) {
            return [(s-item), item];
        }
        seen.add(s-item);
    }
    return null;
}

console.log(sumPairs([1, 2, 3, 4, 5], 6));

//` Sets are useful here because of the .has() method