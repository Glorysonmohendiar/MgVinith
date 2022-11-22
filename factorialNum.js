function factorialNumOf(num){
    let f = 1;
    for( i = 1; i <= num; i++){
        f = f * i;
    }
    return f;
}
const myNum = (5);
console.log(factorialNumOf(myNum));