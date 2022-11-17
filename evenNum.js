const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const even = arr.filter(number => {
  return number % 2 === 0;
});

console.log(even);
