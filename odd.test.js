const evenOrOdd = require('./odd');

test ('Should return odd on passing odd number',() => {
    expect(evenOrOdd(7)).toBe('odd');
});

test ('Should return even on passing even number', () => {
    expect(evenOrOdd(4)).toBe('even');
});

test ('Should not return odd on  passing even number', () => {
    expect(evenOrOdd(8)).not.toBe('odd');
});

test ('Should not return even on passing odd number', () => {
    expect(evenOrOdd(9)).not.toBe('even');
});