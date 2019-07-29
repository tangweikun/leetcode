export function triangleNumber(nums) {
  nums.sort((x, y) => x - y);
  let res = 0;

  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
}
