export function findDuplicates(nums) {
  const set = new Set();
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      res.push(nums[i]);
    }
    set.add(nums[i]);
  }

  return res;
}
