// HELP: 哈希表
// 有bug

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum = sum % k;
    }

    if (map.has(sum)) {
      if (i - map.get(sum) > 1) {
        return true;
      }
    } else {
      map.set(sum, i);
    }
  }

  return false;
};

console.log(checkSubarraySum([26, 6, 6, 0, 0, 9], 17));
