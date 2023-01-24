

function countVowel(string){
    var getVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let char of string){
        if (vowels.includes(char)){
            getVowels++;
        }
    }
    return getVowels;
}

module.exports = countVowel;