// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// FUNDAMENTALSARRAYSNUMBERS

function countBy(x, n) {
    var z = [];
    // running a loop that starts a the x value, where i value is less than n * x if its 2, 10 ,  i = 2 i <= 2 * 10 
    for(var i= x; i <= n * x; i += x ){
      z.push(i)
      
    }
    return z;
  }