export function findShortestSubArray(nums) {
  const res = [];
  let maxTimes = 0;
  let ans = 0;

  for (let i = 0; i < nums.length; i++) {
    if (res[nums[i]]) {
      res[nums[i]].right = i;
      res[nums[i]].times++;
    } else {
      res[nums[i]] = { left: i, right: i, times: 1 };
    }

    if (maxTimes < res[nums[i]].times) {
      maxTimes = res[nums[i]].times;
      ans = res[nums[i]].right - res[nums[i]].left;
    } else if (maxTimes === res[nums[i]].times) {
      ans = Math.min(ans, res[nums[i]].right - res[nums[i]].left);
    }
  }

  return ans + 1;
}
