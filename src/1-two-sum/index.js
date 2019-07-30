export const twoSum = (nums, target) => {
  const res = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (res.get(nums[i]) !== undefined) return [res.get(nums[i]), i];
    res.set(target - nums[i], i);
  }
};
