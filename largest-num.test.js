const largestNum = require('./largest-num');

test ('largest num between 23, 45, 12 should return 45', () => {
    expect(largestNum(23, 45, 12)).toBe(45);
});
test ('largest num between 34, 56, 78 should return 78', () => {
    expect(largestNum(34, 56, 78)).toBe(78);
});