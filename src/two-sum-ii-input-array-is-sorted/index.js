// Time Complexity O(n)

export function twoSum2(nums, target) {
  const hash = [];
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [hash[target - nums[i]] + 1, i + 1];
    }
    hash[nums[i]] = i;
  }

  return;
}
