// HELP:

export const findUnsortedSubarray = nums => {
  const len = nums.length;

  let begin = 0;
  let end = -1;
  let min = nums[len - 1];
  let max = nums[0];

  for (let i = 1; i < len; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[len - i - 1]);
    if (nums[i] < max) end = i;
    if (nums[len - 1 - i] > min) begin = len - i - 1;
  }
  return end - begin + 1;
};
