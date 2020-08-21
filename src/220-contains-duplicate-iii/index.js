/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < Math.min(nums.length, i + k + 1); j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }

  return false;
};

containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0);
