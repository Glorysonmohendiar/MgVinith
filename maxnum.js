function maximum(n1, n2, n3){
    let max = 0;
    if( n1 > n2 ){
        if (n1 > n3){
            max = n1;
        }
        else{
            max = n3;
        }
    }
    else{
        if ( n2 > n3){
            max = n2;
        }
        else{
            max = n3;
        }
    }
    return max;
}
const myNum =maximum(140, 20, 30);
console.log(myNum);