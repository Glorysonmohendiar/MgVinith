let a = 3;
let b = 17;
let c = 12;

// Compound Assignment With Augmented Addition.
a += a = 12;
b += b = 9;
c += c = 7;
console.log(a,b,c);

let i = 11;
let j = 9;
let k = 3;

// Compound Assignment With Augmented Subtraction.
i -= i = 6;
j -= j = 15;
k -= k = 1;
console.log(i, j, k);

let u = 5;
let v = 12;
let w = 4.6;

// Compound Assignment With Augmented Multiplication.
u *= u = 5;
v *= v = 3;
w *= w = 10;
console.log(u,v,w);

let x = 5;
let y = 12;
let z = 46;

// Compound Assignment With Augmented Division
x /= x = 5;
y /= y = 3;
z /= z = 10;
console.log(x, y, z);

//Escaping Literal Quotes in Strings
const sampleStr = "He said, \"I am learning JavaScript\".";
console.log(sampleStr);

//Quoting Strings with Single Quotes
const myStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
//const youStr = 'Finn responds, "Let's go!"';(youStr will show the error )
console.log(myStr);


//Escape Sequences in Strings
var mgStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(mgStr);

//Concatenating Strings with Plus Operator
const yourStr = "Gloryson " + "Mohendiar";
console.log(yourStr);