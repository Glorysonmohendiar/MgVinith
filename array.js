//Nest one Array within Another Array.
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];


//Access Array Data with Indexes.
const teams = [["Book", 23], ["Chocobar", 45], ["Orange", 30]];
console.log(teams);



//Modify Array Data With Indexes.
const myArray = [25, 30, 21];
myArray[1] = [45];
console.log(myArray);



// Access Multi-Dimensional Arrays With Indexes.
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  console.log(subarray, nestedSubarray, element);



  // Manipulate Arrays With push().

const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);

const arr2 = ["Gloryson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr2);


// Manipulate Arrays With pop()
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr)


// Manipulate Arrays With shift()
const ourArray = ["Vinith", "Sam", ["Apple"]];
const removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
console.log(ourArray);

// Manipulate Arrays With unshift()
const yourArray = ["India", "Joy", "Orange"];
yourArray.shift();
yourArray.unshift("Gloryson");
console.log(yourArray);


// Passing Values to Functions with Arguments
function testFun(param1, param2) {
console.log(param1, param2);
}
testFun(8, 9);



// Return a Value from a Function with Return
function plusFive(num) {
    return num + 5;
}
  
const answer = plusFive(8);
console.log(answer);
