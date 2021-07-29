function fourSum(nums, target) {
  if (nums.length < 4) return [];

  nums.sort((x, y) => x - y);
  const res = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (nums[j] === nums[j - 1] && j > i + 1) continue;
      let l = j + 1;
      let r = nums.length - 1;
      while (l < r) {
        if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          r--;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
          while (nums[r] === nums[r + 1] && l < r) {
            r--;
          }
        } else if (nums[i] + nums[j] + nums[l] + nums[r] < target) {
          l++;
        } else {
          r--;
        }
      }
    }
  }

  return res;
}

console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
