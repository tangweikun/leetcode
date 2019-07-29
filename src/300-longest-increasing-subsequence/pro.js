// HELP:

export function lengthOfLIS(nums) {
  let result = [];
  let len = 0;

  for (let i = 0; i < nums.length; i++) {
    let left = 0;
    let right = len;
    while (left !== right) {
      const mid = ~~((left + right) / 2);
      if (result[mid] < nums[i]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    result[left] = nums[i];

    if (left === len) len++;
  }
  return len;
}
