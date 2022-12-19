
// Remove Items Using splice()

function removeItem(arr){
    let myArray = arr.splice(3, 3);
    return arr;
}
console.log(removeItem([1, 2, 3, 4, 5, 6, 7, 8, 9]));