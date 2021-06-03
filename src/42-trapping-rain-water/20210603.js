/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const leftMax = [0];
  const rightMax = [0];
  let res = 0;

  for (let i = 1; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }

  for (let j = height.length - 2; j >= 0; j--) {
    rightMax.unshift(Math.max(rightMax[0], height[j + 1]));
  }

  for (let k = 1; k < height.length - 1; k++) {
    const temp = Math.min(leftMax[k], rightMax[k]) - height[k];
    if (temp > 0) {
      res += temp;
    }
  }

  return res;
};

console.log(trap([4, 2, 0, 3, 2, 5]));
