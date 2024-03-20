//* Create function for fibonacci sequence. 
//* Then refactor with memoization for faster runtime.

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

// console.log(fibonacci(50));

const cache = {};

function fibonacciMemoized(n) {
    if (n in cache) {
        return cache[n];
    }
    else {
        if (n < 2) {
            cache[n] = n;
            return n;
        }
        let result = fibonacciMemoized(n - 1) + fibonacciMemoized(n -2);
        cache[n] = result;
        return result;
    }
}

console.log(fibonacciMemoized(40));