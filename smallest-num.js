// smallest number between three number.
function myFun(num1, num2, num3){
    if (num1 <= num2 && num1 <= num3){
        return "num1 is the smallest number"
    } else if (num2 <= num1 && num2 <= num3){
        return "num2 is the smallest number "
    } else{
        return "num3 is the smallest number"
    }
}
const result =myFun(11, 34, 12);
console.log(result);