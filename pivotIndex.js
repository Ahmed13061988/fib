const arr = [1, 7, 3, 6, 5, 6];

const pivot = function (arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0); // finding the sum
  let left = 0; // creating the left  variable to save it the left part in it
  for (let i = 0; i < arr.length; i++) {
    // looping over the array
    const right = sum - left - arr[i]; // creating right variable to save the result
    if (left === right) {
      // if the left and the right parts are equals, then return the index
      return i;
    }
    left += arr[i]; // if it's not equals then add it to the left
  }
  return -1; // return -1 if they are not equals eventually
};

console.log(pivot(arr));
