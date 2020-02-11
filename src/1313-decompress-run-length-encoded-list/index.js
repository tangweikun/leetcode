/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
  const res = [];
  for (let i = 0; i < nums.length - 1; i += 2) {
    const temp = Array.from({ length: nums[i] }).fill(nums[i + 1]);
    res.push(...temp);
  }

  return res;
};
