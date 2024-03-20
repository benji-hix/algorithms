//* the 'slide down' is the maximum sum of consecutive
//* numbers from the top to the bottom of the pyramid.
//* As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23
/*
 *   /3/
 *  \7\ 4
 * 2 \4\ 6
 *8 5 \9\ 3
 */
//* write a function that takes a pyramid representation as an argument
//* and returns its largest 'slide down'. For example:
//* With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
//* Your function should return `23`.

//~ pseudocode
//` recursion required to calculate every possibility

function longestSlideDown(pyramid) {
    const slidePaths = [];
    const cache = {};
    let max = 0;

    function recursivePath(pyramid, x = 0, y = 0, sum = 0) {
        if (x + 1 == pyramid.length) {
            slidePaths.push(sum + pyramid[x][y]);
            if (sum + pyramid[x][y] > max) {
                max = sum + pyramid[x][y]
            }
            return;
        }
        else if ((x.toString() + y.toString()) in cache) {
            cacheSum = cache[x.toString() + y.toString()]
            recursivePath(pyramid, x+1, y, cacheSum);
            recursivePath(pyramid, x+1, y+1, cacheSum);
        }
        else {
            sum += pyramid[x][y];
            cache[x.toString() + y.toString()] = sum
            recursivePath(pyramid, x + 1, y, sum);
            recursivePath(pyramid, x + 1, y + 1, sum);
        }
    }

    recursivePath(pyramid);
    console.log(slidePaths);
    console.log(cache);

    return max;
}

const testArr2 = [[3],
[7, 4],
[2, 4, 6],
[8, 5, 9, 3]];
const testArr3 =  [[75],
[95, 64],
[17, 47, 82],
[18, 35, 87, 10],
[20,  4, 82, 47, 65],
[19,  1, 23, 75,  3, 34],
[88,  2, 77, 73,  7, 63, 67],
[99, 65,  4, 28,  6, 16, 70, 92],
[41, 41, 26, 56, 83, 40, 80, 70, 33],
[41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
[53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
[70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
[91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
[63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
[ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]

console.log(longestSlideDown(testArr2));

//! error: expected output for medium pyramid is 1064, current result is 891