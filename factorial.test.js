const factorialOfNum = require('./factorial');

test ('the factorial of 4 should return 24', () => {
    expect(factorialOfNum(4)).toBe(24);
});

test ('the factorial of 7 should return 5040 ', () => {
    expect(factorialOfNum(7)).toBe(5040);
});