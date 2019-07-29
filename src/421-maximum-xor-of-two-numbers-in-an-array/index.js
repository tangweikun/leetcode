export const findMaximumXOR = nums => {
  if (nums.length <= 1) return 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] ^ nums[j]) > max) max = nums[i] ^ nums[j];
    }
  }

  return max;
};
