function threeSum(nums) {
  if (nums.length < 3) return [];
  nums.sort((x, y) => x - y);
  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
        while (nums[right] === nums[right + 1] && left < right) {
          right--;
        }
        continue;
      }

      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
}

threeSum([-1, 0, 1, 2, -1, -4]);
