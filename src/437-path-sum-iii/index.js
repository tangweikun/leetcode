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
var pathSum = function(root, sum) {
  if (!root) return 0;
  let left = pathSum(root.left, sum);
  let right = pathSum(root.right, sum);
  return helper(root, sum) + left + right;

  function helper(root, sum) {
    if (!root) return 0;
    let res = 0;
    if (root.val === sum) res++;
    return (
      res +
      helper(root.left, sum - root.val) +
      helper(root.right, sum - root.val)
    );
  }
};
