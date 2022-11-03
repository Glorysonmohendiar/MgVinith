// Introducing Else Statements.

function myFun(val){
    let result = "";
if (val > 10) {
    return "Bigger than 10";
  } else {
    return "10 or Less";
  }
  return result;
}
const answer =myFun(11);
console.log(answer);




// Introducing Else If Statements.

function myFun1(num){
if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
}
const answer1 =myFun1(8);
console.log(answer1);


// Logical Order in If Else Statements

function foo(x) {
    if (x < 1) {
      return "Less than one";
    } else if (x < 2) {
      return "Less than two";
    } else {
      return "Greater than or equal to two";
    }
  }
  const answer3 =foo(6);
  console.log(answer3);




// Chaining If Else Statements

  function testSize(num) {
  if (num <5){
    return "Tiny";
  } else if (num <10){
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20){
    return "Large";
  } else (num >= 20)
    return "Huge";
  }
const ans =testSize(23);
console.log(ans);
