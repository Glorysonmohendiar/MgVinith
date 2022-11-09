

function allPrimeNumber(lower,higher){
for (i = lower; i <= higher; i++) {

    for (j = 2; j <= i-1; j++) {
        if (i % j === 0) {
            break;
        }
    }
    if (i == j) {
        console.log(i);
    }
}
}
const result = allPrimeNumber(25,40);
console.log(result);