
// finding the largest number in array.

function Number(arr){
let biggestNumber = 0;

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > biggestNumber) {
    biggestNumber = arr[i]
  } 

}
return biggestNumber;
}
console.log(Number([1, 4, 90, 76, 56, 10]));