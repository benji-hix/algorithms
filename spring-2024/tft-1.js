//* Write a simple algorithm that adds all numbers up to and including an integer,
//* subtracting the first three integers (1, 2, 3)

function shoppingSpreeValue(level) {
    if (level <= 3) return 0;

    let value = 0;
    for (let i = 4; i <= level; i++) {
        value += (2 * i);
    }

    return value;
}

console.log(shoppingSpreeValue(8));

// function combatRoundCount(stage, round) {
//     const map = {
//         1: [0],
//         2: [1, 2, 3, 5, 6,],
//         3: [1, 2, 3, 5, 6,],
//         4: [1, 2, 3, 5, 6,],
//         5: [1, 2, 3, 5, 6,],
//         6: [1, 2, 3, 5, 6,],
//         7: [1, 2, 3, 5, 6,],
//     }

//     let count = 0;
//     for (const key in map) {
//         if (key <= stage) {

//         }
//     }
// }