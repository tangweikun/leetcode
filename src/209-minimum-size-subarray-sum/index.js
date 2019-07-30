// Time complexity: O(n^2)
// Space complexity: O(n)

export function minSubArrayLen(nums, sum) {
  const subarraySum = [];
  let res = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= sum) return 1;

    for (let j = i - 1; j >= 0; j--) {
      subarraySum[j] += nums[i];
      if (subarraySum[j] >= sum) {
        res = Math.min(res, subarraySum.length + 1 - j);
        break;
      }
    }
    subarraySum.push(nums[i]);
  }

  return ~~res;
}
