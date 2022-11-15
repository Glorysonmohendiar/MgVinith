// program to check if the string is palindrome or not

function checkPalindrome(string) {
    const lofs = string.length;

    for (let i = 0; i < lofs / 2; i++) {
        if (string[i] !== string[lofs - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
const value = checkPalindrome("madam");

console.log(value);