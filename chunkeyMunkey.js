
// Chunkey Monkey
function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }
  console.log(chunkArrayInGroups([1, 2, 3, 4, 5, 6, 7, 8], 2));