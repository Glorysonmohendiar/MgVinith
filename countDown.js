function countDown(number){
    console.log(number);
    const myNumber = number - 1;
    if(myNumber > 0){
        countDown(myNumber);
    }
}
countDown(10);