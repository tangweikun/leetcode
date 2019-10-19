// HELP:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum, preSums = { '0': 1 }, prev = 0) {
  if (!root) return 0;
  let curr = prev + root.val;
  preSums[curr] = (preSums[curr] || 0) + 1;
  let res = (preSums[curr - sum] || 0) - !sum;
  res +=
    pathSum(root.left, sum, preSums, curr) +
    pathSum(root.right, sum, preSums, curr);
  preSums[curr]--;
  return res;
};
