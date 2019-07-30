export const productExceptSelf = nums => {
  const zeros = nums.filter(x => x === 0).length;
  if (zeros > 1) return Array(nums.length).fill(0);

  const product = nums.reduce((acc, x) => (acc *= x || 1), 1);

  return zeros === 1
    ? nums.map(x => (x === 0 ? product : 0))
    : nums.map(x => product / x);
};
