let nums = [3, 1, 2, 10, 1]; //[3, 4, 6, 16, 17]
let arr = [];
var runningSum = function (nums) {
  arr[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    arr[i] = arr[i - 1] + nums[i];
  }
  return arr;
};

console.log(runningSum(nums));
//Hello
