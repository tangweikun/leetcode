export const minMoves = nums => {
  const min = Math.min(...nums);
  const sum = nums.reduce((acc, n) => acc + n, 0);
  return sum - min * nums.length;
};
