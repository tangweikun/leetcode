// Depth-First-Search
// HELP:

export const hasPathSum = function(root, sum) {
  if (!root) return false;
  if (!root.left && !root.right) return root.val === sum;

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
