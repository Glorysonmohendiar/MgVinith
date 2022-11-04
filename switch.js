
// Selecting from Many Options with Switch Statements.

function caseInSwitch(val) {
    switch (val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
  }
  
  const result = caseInSwitch(4);
  console.log(result);




// Adding a Default Option in Switch Statements.

  function switchOfStuff(val) {
    let answer = "";
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
    return answer;
  }
  const result1 = switchOfStuff("c");
  console.log(result);
