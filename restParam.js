
// Use the Rest Parameter with Function Parameters

const sum = (...args) => {
    return args.reduce((a, b, c) => a + b, 0);
  }
  console.log(sum(1, 2, 3, 4));  // would return the value 10.

  console.log(sum());   // would return the value 0.

  console.log(sum(4,5,));   // would return the value 9.