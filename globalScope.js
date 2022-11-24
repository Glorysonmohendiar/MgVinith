
let myGlobal = 10;

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  return (output);
}
const myNum = (5);
console.log(fun2(myNum));