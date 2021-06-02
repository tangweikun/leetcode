/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxF = [...nums];
  let minF = [...nums];
  let res = maxF[0];

  for (let i = 1; i < nums.length; ++i) {
    maxF[i] = Math.max(maxF[i - 1] * nums[i], nums[i], minF[i - 1] * nums[i]);
    minF[i] = Math.min(minF[i - 1] * nums[i], nums[i], maxF[i - 1] * nums[i]);
    res = Math.max(res, maxF[i]);
  }

  return res;
};
