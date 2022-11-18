function even(arr){
    let ar =[];
    for (i = 0; i < arr.length; i++){
        if((arr[i] % 2) === 0){
            ar.push(arr[i]);
        }
    }
    return ar;
}
const myArray = [23, 72, 91, 93, 102, 97, 12, 14];
console.log(even(myArray));
