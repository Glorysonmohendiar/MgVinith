const countVowel = require('./vowel');

test ('should count the number of vowels from string Good Morning', () => {
    expect(countVowel('Good Morning')).toBe(4);
});

test ('should return the number of vowels from string I love my India', () => {
    expect(countVowel('I love my India')).toBe(6);
});