export function majorityElement(nums) {
  const hash = new Map();

  for (let i = 0; i < nums.length; i++) {
    hash.set(nums[i], ~~hash.get(nums[i]) + 1);
    if (hash.get(nums[i]) > nums.length / 2) return nums[i];
  }
}
