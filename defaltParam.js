
// Set Default Parameters for Your Functions

const increment = (number, value = 1) => number + value;

console.log(increment(5, 7)); // would return the value 12.

console.log(increment(6)); // would return the value 7.



// Set Default Parameters for Your Functions

const greet = (name = "Gloryson") => "Hello " + name;

console.log(greet("Mayank")); // would return the string Hello Mayank.

console.log(greet()); // would return the string Hello Gloryson