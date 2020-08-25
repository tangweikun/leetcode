/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//  HELP:
var numSubseq = function (nums, target) {
  let res = 0;
  let mod = 1e9 + 7;
  let left = 0;
  let right = nums.length - 1;
  let powMod = new Array(nums.length);

  nums.sort((val1, val2) => val1 - val2);

  powMod[0] = 1;
  for (let i = 1; i <= nums.length; i++) {
    powMod[i] = (powMod[i - 1] * 2) % mod;
  }

  while (left <= right) {
    while (left <= right && nums[left] + nums[right] > target) {
      right--;
    }
    if (left > right) {
      break;
    }

    res += powMod[right - left];
    res = res % mod;
    left++;
  }

  return res;
};
