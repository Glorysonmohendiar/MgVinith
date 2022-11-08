
// find the smallest number in array.

function Number(arr){
    let smallestNumber = arr[0];
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNumber) {
        smallestNumber = arr[i]
      } 
    
    }
    return smallestNumber;
    }
    console.log(Number([1, 4, 90, 76, 56, 10]));

