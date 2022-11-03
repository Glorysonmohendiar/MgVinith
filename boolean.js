// Comparison with the Equality Operator.

function equalityTest(myVal) {
    if (myVal == 10) {
      return "Equal";
    }
    return "Not Equal";
  }
  const answer = equalityTest(11);
  console.log(answer);



  // Comparison with the Strict Equality Operator.

  function testStrict(val) {
    if (val === 10) {
      return "Equal";
    }
    return "Not Equal";
  }
  const answer2 =testStrict(10);
  console.log(answer2);



// Practice comparing different values.

function compareEquality(a, b) {
    if (a == b) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
  const answer3 =compareEquality(10, "15");
  console.log(answer3);


  //Comparison with the Strict Inequality Operator

  function testStrictNotEqual(val) {
    if (val !== 10) { 
      return "Not Equal";
    }
    return "Equal";
  }
  
  const answer4=testStrictNotEqual(10);
  console.log(answer4);