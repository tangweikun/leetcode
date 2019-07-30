export function compress(nums) {
  let count = 1;
  let i = 1;

  while (i < nums.length + 1) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      count++;
    } else {
      if (count > 1) {
        nums.splice(i, 0, ...`${count}`.split(''));
        count = 1;
        i = i + `${count}`.split('').length;
      }

      i++;
    }
  }

  return nums.length;
}
