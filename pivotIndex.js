const arr = [1, 7, 3, 6, 5, 6];

const pivot = function (arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    const right = sum - left - arr[i];
    if (left === right) {
      return i;
    }
    left += arr[i];
  }
  return -1;
};

console.log(pivot(arr));
