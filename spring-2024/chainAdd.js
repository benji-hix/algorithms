//* create a function that will add numbers 
//*together when called in succession.
/*
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
*/
//* A single call should be equal to the number passed in.
// add(1); // == 1
//* We should be able to store the returned values and reuse them.
/*
var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
*/
//*  assume any number being passed in will be valid whole number. 

// function add(n) {
//     const fn = (x) => {
//         return add(n + x)
//     }

//     fn.valueOf = () => {
//         return n;
//     }

//     console.log(fn.valueOf);

//     return fn;
// }

function add(n){
    var fn = function(x) {
      return add(n + x);
    };
    
    fn.valueOf = function() {
      return n;
    };
    
    return fn;
  }

  console.log(add(1)(2));

//! Error: still not getting expected output in my console
//! despite copy-pasting solution 