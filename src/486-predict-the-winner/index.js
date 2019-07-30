// HELP:
// Using Recursion
// Time complexity : O(2^n)
// Space complexity : O(n)

export const predictTheWinner = nums => {
  return winner(nums, 0, nums.length - 1, 1) >= 0;
};

function winner(nums, s, e, turn) {
  if (s === e) return turn * nums[s];
  const a = turn * nums[s] + winner(nums, s + 1, e, -turn);
  const b = turn * nums[e] + winner(nums, s, e - 1, -turn);
  return turn * Math.max(turn * a, turn * b);
}
