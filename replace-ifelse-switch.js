
// Replacing If Else Chains with Switch

/*function myFun1(val) {
    let answer = "";
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }

    return answer;
  }
  
  const result1 = myFun1(7);
  console.log(result1);*/


  // can be changed


function myFun(val){
    let answer = "";
switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
const result = myFun(7);
console.log(result);
