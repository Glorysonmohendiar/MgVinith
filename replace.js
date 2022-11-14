function sum(arr, n) {
    if(n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  const result =sum([3, 4, 2, 5], 4);
  console.log(result);