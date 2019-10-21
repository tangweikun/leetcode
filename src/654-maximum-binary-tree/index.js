// HELP:

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }

  const max = Math.max.apply(null, nums);
  const maxIndex = nums.findIndex(v => v === max);
  const left = nums.slice(0, maxIndex);
  const right = nums.slice(maxIndex + 1);

  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(left);
  root.right = constructMaximumBinaryTree(right);

  return root;
};
