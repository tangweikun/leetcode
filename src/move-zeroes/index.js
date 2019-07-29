export function moveZeroes(nums) {
  let limit = nums.length;
  let i = 0;

  while (i < limit) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      limit--;
    } else {
      i++;
    }
  }

  return nums;
}
