export const threeSumClosest = (nums, target) => {
  nums.sort((x, y) => x - y);
  let res;
  let difference = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const threeSum = nums[i] + nums[l] + nums[r];
      if (threeSum === target) return target;

      if (Math.abs(threeSum - target) < difference) {
        res = threeSum;
        difference = Math.abs(threeSum - target);
      }

      if (threeSum < target) l++;
      else r--;
    }
  }

  return res;
};
