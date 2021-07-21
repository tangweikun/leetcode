export const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      if (nums[i] + nums[l] + nums[r] === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (l < r && nums[l] == nums[l - 1]) l++;
        while (l < r && nums[r] == nums[r + 1]) r--;
      } else if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      } else r--;
    }
  }

  return res;
};
