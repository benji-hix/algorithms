//* Create function for fibonacci sequence. 
//* Then refactor with memoization for faster runtime.

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(50));


//~ below version utilized a global cache
//~ rather than a localized cache 
// const cache = {};

// function fibonacciMemoized(n) {
//     if (n in cache) {
//         return cache[n];
//     }
//     else {
//         if (n < 2) {
//             cache[n] = n;
//             return n;
//         }
//         let result = fibonacciMemoized(n - 1) + fibonacciMemoized(n -2);
//         cache[n] = result;
//         return result;
//     }
// }

//~ below version utilizes IIFE so cache doesn't pollute 
//~ global namespace 
const fibonacciMemoized = ( () => {
    const cache = {};
    
    return (n) => {
        if (n < 2) {
            return n;
        }
        if (n in cache) {
            return cache[n];
        }
        else {
            cache[n] = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
            return cache[n];
        }

    };
})(); //| invoke immediately to create closure for cache variable

console.log(fibonacciMemoized(100));