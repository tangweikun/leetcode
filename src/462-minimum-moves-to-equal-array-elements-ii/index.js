// HELP:

export const minMoves = nums => {
  nums.sort((x, y) => x - y);

  const target = nums[Math.floor(nums.length / 2)];
  const moves = nums.reduce((acc, n) => acc + Math.abs(n - target), 0);

  return moves;
};
