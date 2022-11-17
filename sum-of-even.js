
function sumOfEven(array){
    let sum = 0;
    for (i = 0; i < array.length; i++){
        if ( i % 2 == 0){
            sum = sum + i;
        }
    }
    return sum;
}
const ourArray = [1, 2, 3, 4, 5, 6, 7,];
console.log(sumOfEven(ourArray));