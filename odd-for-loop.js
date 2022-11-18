function odd(arr){
  let array = [];
  for (i = 0; i < arr.length; i ++) {
    if(arr[i] % 2 != 0){
      array.push(arr[i]);
    }
  }
  return array;
}
const myArray = [1, 2, 3, 4, 5 ,6 ,7, 8, 9];
console.log(odd(myArray));
