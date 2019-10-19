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
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let arr = [];
  let min = Infinity;
  traverse(root);
  for (let i = 1; i < arr.length; i++) {
    let tmp = Math.abs(arr[i] - arr[i - 1]);
    min = Math.min(min, tmp);
  }
  return min;

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    arr.push(node.val);
    traverse(node.right);
  }
};
