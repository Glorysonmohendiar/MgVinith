const sumOfAllDigits = require('./sum-of-array');

test ('the sum of 1, 2, 3, 4 ,5 should return 15 ', () => {
    expect(sumOfAllDigits([1, 2, 3, 4, 5])).toBe(15);
});

test ('the sum of array 3, 4, 5, 6, should return 18', () => {
    expect(sumOfAllDigits([3, 4, 5, 6])).toBe(18);
});



