// largest number between three number.
function myFun(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3){
        return "num1 is the largest number"
    } else if (num2 >= num1 && num2 >= num3){
        return "num2 is the largest number "
    } else{
        return "num3 is the largest number"
    }
}
const result =myFun(11, 34, 21);
console.log(result);