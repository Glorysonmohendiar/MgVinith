function addOfOdd(start, end){
    let sum = 0;
    for(i = start; i < end; i++){
        if(i % 2 == 1){
            sum = sum + i;
        }
    }
    return sum;
}
const myNum = addOfOdd(1, 100);
console.log(myNum);