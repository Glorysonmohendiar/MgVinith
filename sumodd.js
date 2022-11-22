const arr =[1, 2, 3, 4, 5];
function sumOfOdd(array){
    let sum = 0;
    for( i = 0; i < array.length; i++){
        if ( i % 2 == 1){
            sum += i;
        }
    }
    return sum;
}
