export function removeDuplicates2(nums) {
  let currentCount = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] === nums[i - 1]) currentCount++;
    else currentCount = 1;

    if (currentCount > 2) {
      currentCount = 2;
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
}
