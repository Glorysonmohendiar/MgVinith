
// Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 10) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  
  console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));