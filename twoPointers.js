var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let maxArea = 0;
  while (i !== j) {
    let area;
    if (height[i] <= height[j]) {
      area = height[i] * (j - i);
      i++;
    } else if (height[j] < height[i]) {
      area = height[j] * (j - i);
      j--;
    }
    if (area > maxArea) {
      maxArea = area;
    }
  }
  return maxArea;
};
