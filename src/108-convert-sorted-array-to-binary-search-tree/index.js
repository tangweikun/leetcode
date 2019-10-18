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
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  const middle = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[middle]);

  node.left = sortedArrayToBST(nums.slice(0, middle));
  node.right = sortedArrayToBST(nums.slice(middle + 1));

  return node;
};
