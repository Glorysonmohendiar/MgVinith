
function prime(lower, upper){
    for (i = lower; i <= upper; i++) {
    
        for (j = 2; j <= i; j++) {
            if (i % j === 0) {
                break;
            }
        }
        if (i == j) {
        }
    }
}
function twinPrime(start, end){
    for (i = start; i < end; i++){
        if (prime(i) && prime(i + 2)){
        }
        console.log(i, i + 2);
    }
}
const result = twinPrime(1, 10);
console.log(result);