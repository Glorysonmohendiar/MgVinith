// Returning Boolean Values from Function

/*function isEqual(a, b) {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
  const result = isEqual(10, 15);
  console.log(result);*/
  //But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:
  
  function isEqual(a, b) {
    return a === b;
  }
  const result1 = isEqual(10, 15);
  console.log(result1);
  