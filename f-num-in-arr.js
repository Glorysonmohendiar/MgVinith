function linearSearch(arr, key){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            return true;
        }
    }
    return false
}
const result = linearSearch([1, 4, 90, 76, 56, 10],56);
console.log(result);