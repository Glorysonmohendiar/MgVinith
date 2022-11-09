const { is } = require("express/lib/request");

function isPrimeNumber(num){
    for (i = 2; i <= num/2; i++){
        if (num % i == 0){
            return + num + " is not prime";
        }
    }
    return + num + " is prime";
}
const result = isPrimeNumber(16);
const result1 = isPrimeNumber(29);
console.log(result);
console.log(result1);