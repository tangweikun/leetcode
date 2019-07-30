// Time complexity: O(n)
// Space complexity: O(1)

export function minSubArrayLen(nums, s) {
  let ans = Infinity;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }

  return ~~ans;
}
