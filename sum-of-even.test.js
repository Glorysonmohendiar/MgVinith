const sumOfEven = require('./sum-of-even');

test ('sum of even 1, 2, 3, 4, 5, 6 should return 12', () => {
    expect(sumOfEven([1, 2, 3, 4, 5, 6])).toBe(12);
});

