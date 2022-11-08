// Count the number of vowels in a string

function countVowel(string){
    var getVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of string){
        if (vowels.includes(char)){
            getVowels++;
        }
    }
    return getVowels;
}

const result = countVowel("Hello World");

console.log(result);