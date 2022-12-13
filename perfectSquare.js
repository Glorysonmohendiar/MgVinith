function perfectSquare(num){
    for(i = 1; i <=num; i++){
        let multiply = i * i;
        if(multiply === num){
            return "Number is Perfect Square";
        }
    }
    return "Number is Not Perfect Square";
}
const myNum = perfectSquare(64);
console.log(myNum);