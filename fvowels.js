function countVowel(str){
  var getVowels = 0;
  
  for(var i = 0; i < str.length ; i++)
  {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
      getVowels++;
    }
  
  }
  return getVowels;
}
console.log(countVowel("Hello World"));