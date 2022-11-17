function sumOfAllDigits(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const result = sumOfAllDigits([1, 2, 3, 4, 5, 6, 7]);
console.log(result);

